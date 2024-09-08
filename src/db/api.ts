import { Option, Poll } from "../types";

const API_URL = "https://animated-space-doodle-jqrpvj76rrvcg99-5173.app.github.dev"
export const fetchPoll = async (pollId: number): Promise<Poll> => {
    const response = await fetch(`${API_URL}/polls/${pollId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch poll")
    }
    return response.json()
};

export const submitVote = async (pollId: number, selectedOption: number[]): Promise<Option> => { };

export const removeVote = async (pollId: number, selectedOption: number[]): Promise<Option> => { };