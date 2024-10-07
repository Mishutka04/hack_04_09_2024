import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button"

export default function Component() {
    return <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <h1 className="text-2xl font-bold">HackJudge</h1>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Contact</Button>
            </nav>
        </header>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
                            Welcome to HackJudge
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            The ultimate platform for fair and efficient hackathon judging. Empower your jury to vote
                            with ease and precision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Try demo version
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Scan QR or click button below to see what we can.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[600px]:flex-row">
                            <Link
                                to="connect?hackathonId=123"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Demo {'\u2197'}
                            </Link>
                        </div>
                    </div>
                    <img
                        src={getDemoQrUrl()}
                        width="300"
                        height="300"
                        alt="Demo QR"
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover order-last p-10 bg-white"
                    />
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col items-start space-y-4">
                        <GavelIcon className="h-12 w-12 text-primary"/>
                        <h3 className="text-2xl font-bold">Secure Voting</h3>
                        <p className="text-muted-foreground">
                            Our jury voting application ensures the integrity of the voting process with end-to-end
                            encryption and
                            secure authentication.
                        </p>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <CheckIcon className="h-12 w-12 text-primary"/>
                        <h3 className="text-2xl font-bold">Streamlined Evaluation</h3>
                        <p className="text-muted-foreground">
                            Simplify the judging process with our intuitive interface and real-time scoring updates.
                            Jury members
                            can focus on providing valuable feedback.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6 ">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How to Join the
                        Voting</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Follow these simple steps to participate in the hackathon voting:
                    </p>
                </div>
                <div className="mt-8 grid gap-6">
                    <div className="flex items-start gap-4">
                        <div
                            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                            1
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Acquire a QR Code</h3>
                            <p className="text-muted-foreground">
                                Obtain a unique QR code from the hackathon organizers. This code will be your key to
                                access the voting
                                platform.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div
                            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                            2
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Scan the QR Code</h3>
                            <p className="text-muted-foreground">
                                Use your mobile device to scan the QR code and log in to the voting platform.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div
                            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                            3
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Cast Your Vote</h3>
                            <p className="text-muted-foreground">
                                Review the hackathon projects and cast your vote for the winner. Your vote will be
                                recorded securely
                                on the blockchain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; 2024 Jury Voting. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link to="#" className="text-xs hover:underline underline-offset-4">
                    Terms of Service
                </Link>
                <Link to="#" className="text-xs hover:underline underline-offset-4">
                    Privacy
                </Link>
            </nav>
        </footer>
    </div>
}

function CheckIcon(props) {
    return (
        <svg
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
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    )
}


function GavelIcon(props) {
    return (
        <svg
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
            <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/>
            <path d="m16 16 6-6"/>
            <path d="m8 8 6-6"/>
            <path d="m9 7 8 8"/>
            <path d="m21 11-8-8"/>
        </svg>
    )
}

function getDemoQrUrl(): string {
    // const location = useLocation();
    const fullUrl = new URL("/connect?hackathonId=123", window.location.origin);

    return `https://api.qrserver.com/v1/create-qr-code/?size=512x512&data='${fullUrl.toString()}'`
}