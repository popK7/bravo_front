
export default [
  {
    title: 'Notes de frais',
    icon: { icon: 'tabler-wallet' },
    children: [
      { title: 'Les notes de frais', to: 'expenses-list' },
      { title: 'Mes notes de frais', to: { name: 'expenses-my', params: { id: '5036' } } },
    ],
  },

]
