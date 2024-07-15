export default [
  {
    title: 'Congés',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Soldes', to: 'apps-invoice-list' },
      { title: 'Demendes', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Mes Congés', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
    ],
  },

]
