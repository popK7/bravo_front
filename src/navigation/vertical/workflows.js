export default [
  {
    title: 'Workflows',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Les workflows', to: 'apps-invoice-list' },
      { title: 'Modèles', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Mes workflows', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
    ],
  },

]
