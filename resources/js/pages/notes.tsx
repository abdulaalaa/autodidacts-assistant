import { Head } from '@inertiajs/react';
import TextForm from '@/components/text-form';
import { notes } from '@/routes';

type Note = {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
};

export default function Notes({ notes: savedNotes = [] }: { notes?: Note[] }) {
    return (
        <>
            <Head title="Notes" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
                    <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <TextForm />
                    </div>

                    <aside className="rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        <h2 className="text-sm font-semibold text-foreground">
                            Saved notes
                        </h2>

                        <div className="mt-4 space-y-3">
                            {savedNotes.length === 0 ? (
                                <p className="text-sm text-muted-foreground">
                                    Your saved notes will appear here.
                                </p>
                            ) : (
                                savedNotes.map((note) => (
                                    <article
                                        key={note.id}
                                        className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border"
                                    >
                                        <h3 className="truncate text-sm font-medium text-foreground">
                                            {note.title}
                                        </h3>
                                        <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">
                                            {note.content}
                                        </p>
                                    </article>
                                ))
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

Notes.layout = {
    breadcrumbs: [
        {
            title: 'Notes',
            href: notes(),
        },
    ],
};
