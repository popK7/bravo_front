export default [
  {
    title: 'Données de l\'entreprise',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: "Contacts clés de l'entreprise", to: 'apps-invoice-list' },
      { title: 'Politiques et reglements', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Modeles', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
      { title: 'Fiche', to: 'apps-invoice-add' },
      { title: 'Communiqués', to: 'apps-invoice-add' },
    ],
  },

]
