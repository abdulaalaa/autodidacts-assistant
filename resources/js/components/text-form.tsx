import { FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';

export default function TextForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        post('/notes', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    }

    return (
        <form
            onSubmit={submit}
            className="mx-auto flex h-[calc(100vh-10rem)] w-full max-w-[850px] flex-col"
        >
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white px-12 py-10 shadow-sm dark:border-sidebar-border dark:bg-background">
                <div className="mb-6 shrink-0 border-b border-gray-200 pb-4 dark:border-sidebar-border">
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={data.title}
                        onChange={(event) => setData('title', event.target.value)}
                        placeholder="Untitled note"
                        className="w-full border-none bg-transparent text-3xl font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-gray-100"
                    />
                    <InputError className="mt-2" message={errors.title} />
                </div>

                <textarea
                    id="content"
                    name="content"
                    value={data.content}
                    onChange={(event) => setData('content', event.target.value)}
                    placeholder="Start writing..."
                    className="min-h-0 flex-1 resize-none overflow-y-auto border-none bg-transparent text-base leading-8 text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-gray-100"
                />
                <InputError className="mt-2" message={errors.content} />
            </div>

            <div className="mt-4 flex shrink-0 items-center justify-end gap-x-6">
                <Button type="button" variant="ghost" onClick={() => reset()}>
                    Cancel
                </Button>

                <Button type="submit" disabled={processing}>
                    Save
                </Button>
            </div>
        </form>
    );
}
