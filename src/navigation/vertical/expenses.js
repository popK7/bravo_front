
export default [
  {
    title: 'Notes de frais',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Les notes de frais', to: 'apps-invoice-list' },
      { title: 'Mes notes de frais', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
    ],
  },

]
