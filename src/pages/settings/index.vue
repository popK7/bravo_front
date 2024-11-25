<script setup>
const items = [


    {
        id: 6,
        name: 'Products',
        description: '',
        sub_modules: [{
                id: 51,
                name: 'Products',
                to: 'settings/products/list',
                icon: 'tabler-lock-open',
            },
            {
                id: 52,
                name: 'Categories',
                to: 'settings/products/categories',
                icon: 'tabler-lock-open',
            }
        ],
    },
    {
        id: 6,
        name: 'Pay',
        description: '',
        sub_modules: [{
            id: 61,
            name: 'Additional remuneration',
            to: 'additional-remunerations',
            icon: 'tabler-lock-open',
        }],
    },
    {
        id: 7,
        name: 'Expense Note',
        description: '',
        sub_modules: [{
            id: 61,
            name: 'Expense Note categories',
            to: 'additional-remunerations',
            icon: 'tabler-lock-open',
        }],
    },
    {
        id: 7,
        name: 'Models',
        description: '',
        sub_modules: [{
                id: 1,
                name: 'Documents',
                to: 'settings/models/documents',
                icon: 'tabler-lock-open',
            },
            {
                id: 1,
                name: 'Email Templates',
                to: 'settings/models/templates',
                icon: 'tabler-lock-open',
            },
        ],
    }
]

const generals = [{
        id: 1,
        name: 'Roles and Permissions',
        description: '',
        icon: 'tabler-clipboard-check',
        modules: [{
            id: 1,
            name: 'Roles & Permissons',
            to: 'settings/roles',
            icon: 'tabler-circles-relation',
        }],
    },
    {
        id: 2,
        name: 'Compte',
        description: '',
        icon: 'tabler-file-settings',
        modules: [{
                id: 21,
                name: 'Gestion du compte',
                to: 'settings/company/ownership',
                icon: 'tabler-lock-open',
            },

            {
                id: 22,
                name: "Fiche d'entreprise",
                to: 'settings/company/overview',
                icon: 'tabler-lock-open',
            },
            {
                id: 23,
                name: 'Langues & devises',
                to: 'settings/company/localisation',
                icon: 'tabler-message-language',
            }
        ],
    }
]

const absences_presences = [
{
        id: 4,
        name: 'Présences',
        description: '',
        icon: 'tabler-clock-hour-12',
        modules: [{
            id: 41,
            name: 'Regime horaire',
            to: 'settings/presences',
            icon: 'tabler-lock-open',
        }],
    },
    {
        id: 5,
        name: 'Absences',
        description: '',
        icon: 'tabler-umbrella',
        modules: [{
                id: 51,
                name: 'Regime absence',
                to: 'settings/absences/regimes',
                icon: 'tabler-lock-open',
            },
            {
                id: 52,
                name: 'Type absences',
                to: 'settings/absences/types',
                icon: 'tabler-lock-open',
            }
        ],
    },
];

const account = [
      {
        id: 3,
        name: 'Enterprise structures',
        description: '',
        icon: 'tabler-hierarchy-2',
        modules: [{
                id: 31,
                name: 'Sites',
                to: 'settings/structures/sites',
                icon: 'tabler-lock-open',
            },
            {
                id: 32,
                name: 'Departments',
                to: 'settings/structures/departments',
                icon: 'tabler-lock-open',
            },
            {
                id: 33,
                name: 'Functions',
                to: 'settings/structures/positions',
                icon: 'tabler-lock-open',
            }
        ],
    },
    {
        id: 3,
        name: "Données de l'entreprise",
        description: '',
        icon: 'tabler-building',
        modules: [{
                id: 31,
                name: 'Documents',
                to: 'settings/documents/employer',
                icon: 'tabler-lock-open',
            },
            {
                id: 32,
                name: 'Note circulaire',
                to: 'settings/documents/circulars',
                icon: 'tabler-lock-open',
            },
        ],
    },
    {
        id: 3,
        name: "Données des employés",
        description: '',
        icon: 'tabler-user  ',
        modules: [{
                id: 31,
                name: 'Documents',
                to: 'settings/documents/employees',
                icon: 'tabler-lock-open',
            },
        ],
    },
]

const Expense_paies = [
{
        id: 4,
        name: "Paies",
        description: '',
        icon: 'tabler-cash',
        modules: [{
            id: 41,
            name: 'Remunerations additionnelles',
            to: 'settings/paies',
            icon: 'tabler-lock-open',
        }],
    },
    {
        id: 5,
        name: 'Notes de frais',
        description: '',
        icon: 'tabler-wallet',
        modules: [{
                id: 51,
                name: 'Catégories',
                to: 'settings/expenses',
                icon: 'tabler-lock-open',
            },
        ],
    },
    {
        id: 6,
        name: 'Cotisations',
        description: '',
        icon: 'tabler-wallet',
        modules: [{
                id: 51,
                name: 'Salriales',
                to: 'settings/cotisations/employees',
                icon: 'tabler-lock-open',
            },
            {
                id: 52,
                name: 'Patronnales',
                to: 'settings/cotisations/employers',
                icon: 'tabler-lock-open',
            }
        ],
    },
];

const Materials_badges = [
{
        id: 7,
        name: "Materiels",
        description: '',
        icon: 'tabler-building-store',
        modules: [{
            id: 71,
            name: 'Catégories',
            to: 'settings/products/categories',
            icon: 'tabler-lock-open',
        },
        {
            id: 71,
            name: 'Materiels',
            to: 'settings/products',
            icon: 'tabler-lock-open',
        }],
    },
    {
        id: 8,
        name: 'Badges',
        description: '',
        icon: 'tabler-badges',
        modules: [{
                id: 51,
                name: 'Catégories',
                to: 'settings/badges/categories',
                icon: 'tabler-lock-open',
            },
            {
                id: 51,
                name: 'Badges',
                to: 'settings/badges',
                icon: 'tabler-lock-open',
            },
        ],
    },
];

const Notifications = [
    {
        id: 9,
        name: 'Notifications',
        description: '',
        icon: 'tabler-template',
        modules: [
            {
                id: 91,
                name: 'Registration',
                to: 'settings/notifications/registrations',
                icon: 'tabler-lock-open',
            },
            {
                id: 92,
                name: 'Contrat',
                to: 'settings/contract',
                icon: 'tabler-lock-open',
            },
            {
                id: 93,
                name: 'Certificat',
                to: 'settings/notifications/registrations',
                icon: 'tabler-lock-open',
            },
            {
                id: 94,
                name: 'Récu solde',
                to: 'settings/recu',
                icon: 'tabler-lock-open',
            },
            {
                id: 94,
                name: 'Dénonciation solde',
                to: 'settings/denonciation',
                icon: 'tabler-lock-open',
            },
            
        ],
    },
];

import SettingCard from '../components/SettingCard.vue'
</script>

<template>
  <div class="container-fluid">
    <VRow>
        <VCol cols="10" md="10" offset-md="1">
            <VCard title="Settings">
                <template #title>
                    <h3>Configurations</h3>
                </template>
                <VRow>
                    <!-- <SettingCard :modules="items" />   -->
                    <VCardText>
                        <VRow>
                            <VCol cols="12" md="12" class="ms-3">
                                <h3 class="mb-5 mt-3">GENERAL</h3>
                                <VDivider class="mb-5 mt-3"/>
                            </VCol>
                            <!-- Generals -->
                            <VCol cols="12" md="12">
                                <VRow>
                                    <VCol cols="6" md="6" v-for="(item, index) of generals" :key="index">
                                        <div class="d-flex">
                                            <VIcon color="primary" :icon="item.icon" size="50" />
                                            <div class="ml-3">
                                                <h3 class="ms-3">{{item.name}}</h3>
                                                <div class="ms-3">
                                                    <a :href="modul.to" class="mr-2" v-for="(modul, index) of item.modules" :key="index">{{modul.name}}</a>
                                                </div>
                                            </div>
  
                                        </div>
                                    </VCol>
                                </VRow>
                            </VCol>
                            <VCol cols="12" md="12" class="ms-3">
                                <h3 class="mb-5 mt-3">ENTREPRISE</h3>
                                <VDivider />
                            </VCol>
                            <!-- Account -->
                            <VCol cols="12" md="12">
                                <VRow>
                                    <VCol cols="6" md="6" v-for="(item, index) of account" :key="index">
                                        <div class="d-flex">
                                            <VIcon color="primary" :icon="item.icon" size="50" />
                                            <div class="ml-3">
                                                <h3 class="ms-3">{{item.name}}</h3>
                                                <div class="ms-3">
                                                    <a :href="modul.to" class="mr-2" v-for="(modul, index) of item.modules" :key="index">{{modul.name}}</a>
                                                </div>
                                            </div>
  
                                        </div>
                                    </VCol>
                                </VRow>
                            </VCol>
                            <!-- presence-abseence -->
                            <VCol cols="12" md="12" class="ms-3">
                                <h3 class="mb-5 mt-3">PRESENCE - ABSENCE</h3>
                                <VDivider />
                            </VCol>
                            <VCol cols="12" md="12">
                                <VRow>
                                    <VCol cols="6" md="6" v-for="(item, index) of absences_presences" :key="index">
                                        <div class="d-flex">
                                            <VIcon color="primary" :icon="item.icon" size="50" />
                                            <div class="ml-3">
                                                <h3 class="ms-3">{{item.name}}</h3>
                                                <div class="ms-3">
                                                    <a :href="modul.to" class="mr-2" v-for="(modul, index) of item.modules" :key="index">{{modul.name}}</a>
                                                </div>
                                            </div>
  
                                        </div>
                                    </VCol>
                                </VRow>
                            </VCol>
                            <!-- Pay-expence note -->
                            <VCol cols="12" md="12" class="ms-3">
                                <h3 class="mb-5 mt-3">PAIES - NOTE DE FRAIS</h3>
                                <VDivider />
                            </VCol>
                            <!-- Account -->
                            <VCol cols="12" md="12" class="mb-5">
                                <VRow>
                                    <VCol cols="6" md="6" v-for="(item, index) of Expense_paies" :key="index">
                                        <div class="d-flex">
                                            <VIcon color="primary" :icon="item.icon" size="50" />
                                            <div class="ml-3">
                                                <h3 class="ms-3">{{item.name}}</h3>
                                                <div class="ms-3">
                                                    <a :href="modul.to" class="mr-2" v-for="(modul, index) of item.modules" :key="index">{{modul.name}}</a>
                                                </div>
                                            </div>
  
                                        </div>
                                    </VCol>
                                </VRow>
                            </VCol>
                            <!-- Pay-expence note -->
                            <VCol cols="12" md="12" class="ms-3">
                                <h3 class="mb-5">MATERIELS - BADGES</h3>
                                <VDivider />
                            </VCol>
                            <!-- Account -->
                            <VCol cols="12" md="12" class="mb-5">
                                <VRow>
                                    <VCol cols="6" md="6" v-for="(item, index) of Materials_badges" :key="index">
                                        <div class="d-flex">
                                            <VIcon color="primary" :icon="item.icon" size="50" />
                                            <div class="ml-3">
                                                <h3 class="ms-3">{{item.name}}</h3>
                                                <div class="ms-3">
                                                    <a :href="modul.to" class="mr-2" v-for="(modul, index) of item.modules" :key="index">{{modul.name}}</a>
                                                </div>
                                            </div>
  
                                        </div>
                                    </VCol>
                                </VRow>
                            </VCol>
                            <VCol cols="12" md="12" class="ms-3">
                                <h3 class="mb-5">NOTIFICATIONS - TEMPLATE</h3>
                                <VDivider />
                            </VCol>
                            <!-- Account -->
                            <VCol cols="12" md="12" class="mb-15">
                                <VRow>
                                    <VCol cols="6" md="6" v-for="(item, index) of Notifications" :key="index">
                                        <div class="d-flex">
                                            <VIcon color="primary" :icon="item.icon" size="50" />
                                            <div class="ml-3">
                                                <h3 class="ms-3">{{item.name}}</h3>
                                                <div class="ms-3">
                                                    <a :href="modul.to" class="mr-2" v-for="(modul, index) of item.modules" :key="index">{{modul.name}}</a>
                                                </div>
                                            </div>
  
                                        </div>
                                    </VCol>
                                </VRow>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VRow>
            </VCard>
        </VCol>
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  action: read
  subject: AclDemo
</route>

<style scoped>
.justify-space-between {
    justify-content: space-between;
}
</style>
