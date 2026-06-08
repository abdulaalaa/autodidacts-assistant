export default function TextForm() {
    return (
        <form className="mx-auto flex h-[calc(100vh-10rem)] w-full max-w-[850px] flex-col">
            {/* Page-shaped writing area */}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white px-12 py-10 shadow-sm">
                <div className="mb-6 shrink-0 border-b border-gray-200 pb-4">
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Untitled note"
                        className="w-full border-none bg-transparent text-3xl font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                </div>

                <textarea
                    id="content"
                    name="content"
                    placeholder="Start writing..."
                    className="min-h-0 flex-1 resize-none overflow-y-auto border-none bg-transparent text-base leading-8 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    defaultValue=""
                />

            </div>

            <div className="mt-4 flex shrink-0 items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                >
                    Save
                </button>
            </div>
        </form>
    );
}
