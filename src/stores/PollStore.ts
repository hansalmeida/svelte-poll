import { writable } from "svelte/store"

type IPoll = {
  question: string
  answer1: string
  answer2: string
  votes1: number
  votes2: number
  id: number
}
export const PollStore = writable<IPoll[]>([
  {
    id: 1,
    question: "Python or TypeScript?",
    answer1: "Python",
    answer2: "TypeScript",
    votes1: 9,
    votes2: 15,
  },
])
