export default [
  {
    title: 'Données de l\'entreprise',
    icon: { icon: 'tabler-building' },
    children: [
      { title: "Contacts clés de l'entreprise", to: 'account-data-contacts' },
      { title: 'Politiques et reglements', to: { name: 'account-data-politics', params: { id: '5036' } } },
      { title: 'Modeles', to: { name: 'account-data-models', params: { id: '5036' } } },
      { title: 'Fiche', to: 'account-data-fiches' },
      { title: 'Communiqués', to: 'account-data-notes' },
    ],
  },

]
