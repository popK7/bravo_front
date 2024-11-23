export default [
  {
    title: 'Congés',
    icon: { icon: 'tabler-plane' },
    children: [
      { title: 'Soldes', to: 'absences-soldes' },
      { title: 'Demandes', to: 'absences' },
      { title: 'Mes Congés', to: { name: 'absences-my', params: { id: '5036' } } },
    ],
  },

]
