export default [
  {
    title: 'Données des employés',
    icon: { icon: 'tabler-address-book' },
    children: [
      { title: 'Inventaires', to: 'employees-materials' },
      { title: "Badge d'acces", to: { name: 'employees-access-badges', params: { id: '5036' } } },
      { title: 'Formations', to: { name: 'employees-formations', params: { id: '5036' } } },
      { title: 'Note du departement RH', to: 'employees-departments-notes' },
      { title: 'Contrats', to: 'employees-contrats' },
      { title: 'Certificats', to: 'employees-certificats' },
      { title: 'Autres documents', to: 'employees-others' },
    ],
  },

]
