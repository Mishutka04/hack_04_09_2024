import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button"
import {Slider} from "@/components/ui/slider"
import {Textarea} from "@/components/ui/textarea"
import {Link, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";
import {useToast} from "@/hooks/use-toast.ts";

export function VotingScreenX() {
    const [criteria, setCriteria] = useState<Criterion[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [criteriaValues, setCriteriaValues] = useState<Record<string, any>>({});
    const [hackathonId, setHackathonId] = useState<string | null>(null);
    const [teamId, setTeamId] = useState<string | null>(null);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const {toast} = useToast();
    const navigate = useNavigate()

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryHackathonId = queryParams.get('hackathonId');
        const queryUserToken = queryParams.get('userToken');
        const queryTeamId = queryParams.get('teamId');

        if (!queryHackathonId) {
            setToastMessage("Error: No hackathon ID provided in the URL. Redirecting to landing page...");
            navigate("/")
        }

        setHackathonId(queryHackathonId);
        setUserToken(queryUserToken);
        setTeamId(queryTeamId);

        const loadData = async () => {
            try {
                mockFetchCriteria().then(setCriteria);
                mockFetchTeams().then(setTeams);
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

    const handleCriterionChange = (id: string, value: any) => {
        setCriteriaValues(prev => ({...prev, [id]: value}));
    };

    const onSubmitHandler = () => {
        const allCriteriaSet = criteria.every(criterion =>
            criteriaValues[criterion.id] !== undefined &&
            criteriaValues[criterion.id] !== null &&
            criteriaValues[criterion.id] !== ''
        );

        if (allCriteriaSet) {
            setToastMessage("Vote submitted successfully!");
        } else {
            setToastMessage("Not all criteria have been set.");
        }
    };

    return <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header
            className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon className="h-5 w-5"/>
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-4 p-4 text-lg font-medium">
                        {teams.map((team) => <TeamLink hackathonId={hackathonId} userToken={userToken} team={team}/>)}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                    <BookmarkIcon className="h-4 w-4"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Bookmark</span>
                </Button>
                <Button size="sm" className="h-8 gap-1" onClick={onSubmitHandler}>
                    <CheckmarkIcon className="h-4 w-4"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Submit Vote</span>
                </Button>
            </div>
        </header>
        <main className="flex-1 px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
                <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">Criteria</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {criteria.filter(c => c.type !== 'text').map((criterion) => criterion.type === 'slider' ? (
                            <SliderCriterion
                                key={criterion.id}
                                criterion={criterion}
                                onChange={handleCriterionChange}
                                value={criteriaValues[criterion.id]}
                            />
                        ) : (
                            <SelectCriterion
                                key={criterion.id}
                                criterion={criterion}
                                onChange={handleCriterionChange}
                                value={criteriaValues[criterion.id]}
                            />
                        ))}
                    </div>
                </div>
                {criteria.filter(c => c.type === 'text').map((criterion) => <TextCriterion
                    key={criterion.id}
                    criterion={criterion}
                    onChange={handleCriterionChange}
                    value={criteriaValues[criterion.id]}
                />)}
            </div>
        </main>
    </div>;
}

interface Criterion {
    id: string;
    label: string;
    type: 'slider' | 'select' | 'text';
    max?: number;
    step?: number;
    options?: { value: string; label: string }[];
    rows?: number;
    placeholder?: string;
}

const SliderCriterion: React.FC<{
    criterion: Criterion;
    onChange: (id: string, value: number) => void;
    value: number
}> = ({criterion, onChange, value}) => {
    return (
        <div className="grid gap-1">
            <label htmlFor={criterion.id} className="text-sm font-medium">
                {criterion.label}
            </label>
            <Slider
                defaultValue={[value || 0]}
                max={criterion.max}
                step={criterion.step}
                onValueChange={([val]) => onChange(criterion.id, val)}
            />
        </div>
    );
};

const SelectCriterion: React.FC<{
    criterion: Criterion;
    onChange: (id: string, value: string) => void;
    value: string
}> = ({criterion, onChange, value}) => {
    return (
        <div className="grid gap-1">
            <label htmlFor={criterion.id} className="text-sm font-medium">
                {criterion.label}
            </label>
            <Select value={value} onValueChange={(val) => onChange(criterion.id, val)}>
                <SelectTrigger>
                    <SelectValue placeholder={`Select ${criterion.label.toLowerCase()}`}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {criterion.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

const TextCriterion: React.FC<{
    criterion: Criterion;
    onChange: (id: string, value: string) => void;
    value: string
}> = ({criterion, onChange, value}) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{criterion.label}</h2>
            </div>
            <Textarea
                placeholder={criterion.placeholder}
                rows={criterion.rows}
                className="resize-none rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                value={value}
                onChange={(e) => onChange(criterion.id, e.target.value)}
            />
        </div>
    );
};

interface Team {
    id: string;
    name: string;
}

const TeamLink: React.FC<{ team: Team, userToken: string, hackathonId: string }> = ({team, userToken, hackathonId}) => {
    return <Button asChild>
        <Link
            to={`/vote?team=${team.id}&userToken=${userToken}&hackathonId=${hackathonId}`}
            className="flex items-center gap-4 rounded-md bg-background p-2 text-muted-foreground hover:text-foreground"
        >
            <GroupIcon className="h-5 w-5"/>
            {team.name}
        </Link>
    </Button>;
};

const mockFetchTeams = (): Promise<Team[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 'team-a', name: 'Team A'},
                {id: 'team-b', name: 'Team B'},
                {id: 'team-c', name: 'Team C'},
                {id: 'team-d', name: 'Team D'},
                {id: 'team-e', name: 'Team E'},
            ]);
        }, 800); // Simulate network delay
    });
};

const mockFetchCriteria = (): Promise<Criterion[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 'innovation', label: 'Innovation', type: 'slider', max: 5, step: 1},
                {id: 'design', label: 'Design', type: 'slider', max: 5, step: 1},
                {id: 'functionality', label: 'Functionality', type: 'slider', max: 5, step: 1},
                {id: 'presentation', label: 'Presentation', type: 'slider', max: 5, step: 1},
                {id: 'impact', label: 'Impact', type: 'slider', max: 5, step: 1},
                {
                    id: 'city',
                    label: 'City',
                    type: 'select',
                    options: [
                        {value: 'moscow', label: 'Moscow'},
                        {value: 'saint-petersburg', label: 'Saint Petersburg'},
                        {value: 'novosibirsk', label: 'Novosibirsk'},
                    ]
                },
                {
                    id: 'comments',
                    label: 'Comments',
                    type: 'text',
                    rows: 4,
                    placeholder: 'Enter your comments here...'
                },
                {
                    id: 'notes',
                    label: 'Notes',
                    type: 'text',
                    rows: 4,
                    placeholder: 'Enter your notes here...'
                },
            ]);
        }, 2000);
    });
};

function BookmarkIcon(props: React.ComponentProps<'svg'>) {
    return <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
}


function GroupIcon(props: React.ComponentProps<'svg'>) {
    return <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 7V5c0-1.1.9-2 2-2h2"/>
        <path d="M17 3h2c1.1 0 2 .9 2 2v2"/>
        <path d="M21 17v2c0 1.1-.9 2-2 2h-2"/>
        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/>
        <rect width="7" height="5" x="7" y="7" rx="1"/>
        <rect width="7" height="5" x="10" y="12" rx="1"/>
    </svg>
}


function MenuIcon(props: React.ComponentProps<'svg'>) {
    return <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="4" x2="20" y1="12" y2="12"/>
        <line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
}


function CheckmarkIcon(props: React.ComponentProps<'svg'>) {
    return <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 6L9 17l-5-5"/>
    </svg>
}
