import create from 'zustand'

export const useStore = create((set) => ({
	userId: null,
	userBalance: 0,
	userReward: 0,
	setUserId: (userId) => set((state) => ({ userId: userId })),
  setBalance: (balance) => set((state) => ({ userBalance: balance })),
  setReward: (reward) => set((state) => ({ userReward: reward })),
}))
