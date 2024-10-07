export default [
  {
    title: 'Données des employés',
    icon: { icon: 'tabler-address-book' },
    children: [
      { title: 'Inventaires', to: 'employees-data-materials' },
      { title: "Badge d'acces", to: { name: 'employees-data-access-badges', params: { id: '5036' } } },
      { title: 'Formations', to: { name: 'employees-data-formations', params: { id: '5036' } } },
      { title: 'Note du departement RH', to: 'employees-data-departments-notes' },
      { title: 'Contrats', to: 'employees-data-contrats' },
      { title: 'Certificats', to: 'employees-data-certificats' },
      { title: 'Autres documents' },
    ],
  },

]
