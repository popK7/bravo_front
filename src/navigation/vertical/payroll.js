export default [
  {
    title: 'Paies',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Rémunerations', to: 'apps-invoice-list' },
      { title: 'Cycle de paie', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Ma paie', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
    ],
  },

]
