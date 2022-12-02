export interface PostData {
    id: number,
    userid: number,
    time: number,
    message: string
};

export const posts : PostData[] = [
    { id: 0, userid: 0, time: 5, message: "Mark Created His Account" },
    { id: 1, userid: 1, time: 7, message: "Jack Created His Account" },
    { id: 2, userid: 1, time: 8, message: "This Is Just A Test" },
    { id: 3, userid: 0, time: 9, message: "Hello This Is My Second Message" },
    { id: 4, userid: 1, time: 12, message: "This Is Another Test" },
    { id: 5, userid: 2, time: 15, message: "Christopher Created His Account" },
    { id: 6, userid: 1, time: 17, message: "Final Test" },
];