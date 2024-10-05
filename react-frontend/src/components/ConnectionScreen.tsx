import {useToast} from "@/hooks/use-toast"
import {Card, CardContent} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import APIService from "@/services/APIService.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {z} from "zod";
import {Skeleton} from "@/components/ui/skeleton.tsx";

export function ConnectionScreen() {
    const [loading, setLoading] = useState(true);
    const [hackathonId, setHackathonId] = useState<string | null>(null);
    const [hackathonName, setHackathonName] = useState<string | null>(null);
    const [hackathonDates, setHackathonDates] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const {toast} = useToast();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryHackathonId = queryParams.get('hackathonId');

        if (!queryHackathonId) {
            setToastMessage("Error: No hackathon ID provided in the URL. Redirecting to landing page...");
            navigate("/")
        }

        setHackathonId(queryHackathonId);

        const loadData = async () => {
            try {
                const data = await APIService.connect(queryHackathonId);
                setHackathonName(data.hackathon.name)
                setHackathonDates(`${data.hackathon.startDate.toLocaleDateString()} - ${data.hackathon.endDate.toLocaleDateString()}`);
            } catch (error) {
                setToastMessage(`Error: Failed to connect to the hackathon.: ${error}`);
            }
            setLoading(false);
        };

        loadData();
    }, [location.search]);

    useEffect(() => {
        toast({description: toastMessage});
    }, [toastMessage]);

    const handleUsernameSubmit = async (name: string) => {
        if (hackathonId === null) {
            setToastMessage("Error: Something went wrong and this is a bug.");
            return;
        }

        try {
            const userToken = await APIService.createUser(name, hackathonId);
            navigate(`/vote?hackathonId=${hackathonId}&userToken=${userToken}`);
        } catch (error) {
            setToastMessage(`Error: Failed to create user: ${error}`);
        }
    };

    return <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="mx-auto max-w-md w-full space-y-6 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                {loading
                    ? <Skeleton className={"h-10 w-[200px] mx-auto rounded-br mb-2"}/>
                    : <h1 className="text-3xl font-bold tracking-tight text-primary">{hackathonName}</h1>}
                {loading
                    ? <Skeleton className={"h-7 w-[100px] mx-auto rounded-br"}/>
                    : <p className="mt-2 text-sm text-muted-foreground">{hackathonDates}</p>}
            </div>
            {loading
                ? <Skeleton className={"h-[200px] w-[400px] mx-auto rounded-br"}/>
                : <Card>
                    <CardContent className="p-6">
                        <NameForm onSubmit={(data) => {
                            handleUsernameSubmit(data.username)
                        }}/>
                    </CardContent>
                </Card>}
        </div>
    </div>
}

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

function NameForm({onSubmit}: { onSubmit: (data: z.infer<typeof FormSchema>) => void }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
            <div>
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => <FormItem>
                        <FormLabel className={"text-base font-normal"}>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>}
                />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
        </form>
    </Form>
}
