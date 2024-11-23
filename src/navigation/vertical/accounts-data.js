export default [
  {
    title: 'Données de l\'entreprise',
    icon: { icon: 'tabler-building' },
    children: [
      { title: "Contacts clés de l'entreprise", to: 'account-contacts' },
      { title: 'Politiques et reglements', to: { name: 'account-politics', params: { id: '5036' } } },
      { title: 'Modeles', to: { name: 'account-models', params: { id: '5036' } } },
      { title: 'Fiche', to: 'account-fiches' },
      { title: 'Communiqués', to: 'account-notes' },
    ],
  },

]
