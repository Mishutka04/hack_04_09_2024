import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button"
import {Slider} from "@/components/ui/slider"
import {Textarea} from "@/components/ui/textarea"
import {Link} from "react-router-dom";
import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

export function VotingScreenX() {
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
                        <Link
                            to="#"
                            className="flex items-center gap-4 rounded-md bg-background p-2 text-muted-foreground hover:text-foreground"
                        >
                            <GroupIcon className="h-5 w-5"/>
                            Team A
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-4 rounded-md bg-background p-2 text-muted-foreground hover:text-foreground"
                        >
                            <GroupIcon className="h-5 w-5"/>
                            Team B
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-4 rounded-md bg-background p-2 text-muted-foreground hover:text-foreground"
                        >
                            <GroupIcon className="h-5 w-5"/>
                            Team C
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-4 rounded-md bg-background p-2 text-muted-foreground hover:text-foreground"
                        >
                            <GroupIcon className="h-5 w-5"/>
                            Team D
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-4 rounded-md bg-background p-2 text-muted-foreground hover:text-foreground"
                        >
                            <GroupIcon className="h-5 w-5"/>
                            Team E
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                    <BookmarkIcon className="h-4 w-4"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Bookmark</span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
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
                        <div className="grid gap-1">
                            <label htmlFor="innovation" className="text-sm font-medium">
                                Innovation
                            </label>
                            <Slider defaultValue={[3]} max={5} step={1}/>
                        </div>
                        <div className="grid gap-1">
                            <label htmlFor="design" className="text-sm font-medium">
                                Design
                            </label>
                            <Slider defaultValue={[4]} max={5} step={1}/>
                        </div>
                        <div className="grid gap-1">
                            <label htmlFor="functionality" className="text-sm font-medium">
                                Functionality
                            </label>
                            <Slider defaultValue={[4]} max={5} step={1}/>
                        </div>
                        <div className="grid gap-1">
                            <label htmlFor="presentation" className="text-sm font-medium">
                                Presentation
                            </label>
                            <Slider defaultValue={[3]} max={5} step={1}/>
                        </div>
                        <div className="grid gap-1">
                            <label htmlFor="impact" className="text-sm font-medium">
                                Impact
                            </label>
                            <Slider defaultValue={[4]} max={5} step={1}/>
                        </div>
                        <div className="grid gap-1">
                            <label htmlFor="overall" className="text-sm font-medium">
                                City
                            </label>
                            <Select>
                                <SelectTrigger >
                                    <SelectValue placeholder="Select city"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="moscow">Moscow</SelectItem>
                                        <SelectItem value="saint-petersburg">Saint Petersburg</SelectItem>
                                        <SelectItem value="novosibirsk">Novosibirsk</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">Comments</h2>
                    </div>
                    <Textarea
                        placeholder="Enter your comments here..."
                        rows={4}
                        className="resize-none rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
        </main>
    </div>
}

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
