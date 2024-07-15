export default [
  {
    title: 'Données des employés',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Inventaires', to: 'apps-invoice-list' },
      { title: "Badge d'acces", to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Formations', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
      { title: 'Note du departement RH', to: 'apps-invoice-add' },
      { title: 'Contrats', to: 'apps-invoice-add' },
      { title: 'Certificats', to: 'apps-invoice-add' },
      { title: 'Autres documents', to: 'apps-invoice-add' },
    ],
  },

]
