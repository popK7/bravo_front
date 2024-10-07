export default [
  {
    title: 'Congés',
    icon: { icon: 'tabler-plane' },
    children: [
      { title: 'Soldes', to: 'absences-soldes' },
      { title: 'Demends', to: 'absences-demands' },
      { title: 'Mes Congés', to: { name: 'absences-my', params: { id: '5036' } } },
    ],
  },

]
