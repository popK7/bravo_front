export default [
  {
    title: 'Paies',
    icon: { icon: 'tabler-devices-dollar' },
    children: [
      { title: 'Rémunerations', to: 'paies' },
      { title: 'Cycle de paie', to: { name: 'paies-cycles', params: { id: '5036' } } },
      { title: 'Ma paie', to: { name: 'paies-my', params: { id: '5036' } } },
    ],
  },

]
