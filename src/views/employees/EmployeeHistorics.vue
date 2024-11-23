<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pdf from '@images/icons/project-icons/pdf.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'
</script>

<template>
  <VCard title="Historique">
    <VCardText>
      <VTimeline
        side="end"
        align="start"
        line-inset="8"
        truncate-line="both"
        density="compact"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap">
            <span class="app-timeline-title">
              Get on the flight
            </span>
            <span class="app-timeline-meta">3rd October</span>
          </div>

          <!-- 👉 Content -->
          <div class="app-timeline-text mb-1">
            <span>Charles de Gaulle Airport, Paris</span>
            <VIcon
              size="20"
              icon="tabler-arrow-right"
              class="mx-2 flip-in-rtl"
            />
            <span>Heathrow Airport, London</span>
          </div>

          <p class="app-timeline-meta mb-2">
            6:30 AM
          </p>

          <div class="app-timeline-text d-flex align-center gap-2">
            <div>
              <VImg
                :src="pdf"
                :width="22"
              />
            </div>

            <span>booking-card.pdf</span>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview Schedule -->
        <VTimelineItem
          size="x-small"
          dot-color="primary"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap mb-1">
            <div class="app-timeline-title">
              Interview Schedule
            </div>
            <span class="app-timeline-meta">4th October</span>
          </div>

          <div class="app-timeline-text">
            Bonbon gummies caramels brownie topping fruitcake gingerbread jelly-o marzipan.
          </div>

          <!-- 👉 Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <!-- 👉 Avatar & Personal Info -->
            <div class="d-flex align-center mt-2">
              <VAvatar
                size="32"
                class="me-2"
                :image="avatar2"
              />
              <div class="d-flex flex-column">
                <p class="text-sm font-weight-medium text-high-emphasis mb-0">
                  Rebecca Godman
                </p>
                <span class="text-xs">Javascript Developer</span>
              </div>
            </div>

            <!-- 👉 Person Actions -->
            <div>
              <IconBtn>
                <VIcon
                  size="20"
                  icon="tabler-message"
                />
              </IconBtn>
              <IconBtn>
                <VIcon
                  size="20"
                  icon="tabler-phone"
                />
              </IconBtn>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Design Review -->
        <VTimelineItem
          size="x-small"
          dot-color="success"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <span class="app-timeline-title">
              Design Review
            </span>
            <span class="app-timeline-meta">September, 20</span>
            <span class="app-timeline-meta">September, 20</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text">
            Weekly review of freshly prepared design for our new application.
          </p>

          <div class="d-flex align-center">
            <VAvatar
              size="32"
              :image="avatar1"
              class="me-2"
            />
            <h6 class="text-sm font-weight-medium">
              John Doe (Client)
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>
