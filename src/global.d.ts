/// <reference types="@sveltejs/kit" />

interface Note {
    name: string;
    id: string;
    folder: string;
    data: string;
    public: boolean;
    publicId: string;
    creator: string;
}

interface Result<T> {
    found: boolean;
    data?: T;
}
