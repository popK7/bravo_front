export default [
  {
    title: 'Presences',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Feuilles de temps', to: 'apps-invoice-list' },
      { title: 'Heures Sup', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Ma presence', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
    ],
  },

]
