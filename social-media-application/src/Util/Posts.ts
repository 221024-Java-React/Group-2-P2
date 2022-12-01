export interface PostData {
    userid: number,
    time: number,
    message: string
};

export const posts : PostData[] = [
    { userid: 0, time: 5, message: "Mark Created His Account" },
    { userid: 1, time: 7, message: "Jack Created His Account" },
    { userid: 1, time: 8, message: "This Is Just A Test" },
    { userid: 0, time: 9, message: "Hello This Is My Second Message" },
    { userid: 1, time: 12, message: "This Is Another Test" },
    { userid: 2, time: 15, message: "Christopher Created His Account" },
    { userid: 1, time: 17, message: "Final Test" },
];