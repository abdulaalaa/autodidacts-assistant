import { Head } from '@inertiajs/react';
import TextForm from '@/components/text-form';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { notes } from '@/routes';
export default function Notes() {
    return (
        <>
            <Head title="Notes" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <TextForm />
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
