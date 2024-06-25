import data from '@/helper/data.json'
import { ref } from 'vue'
import { defineStore } from 'pinia'
type headerItem = {
  id: string
  url: string
  text: string
  active: boolean
}
export const usePageStore = defineStore('page', () => {
  const activePageId = ref()
  const activeDashboardPageId = ref('dashboard')
  const linkItems: headerItem[] = data.header.items.map((x, index) => ({
    id: index.toString(),
    url: x.url,
    text: x.text,
    active: false
  }))
  const linkDashboardItems: headerItem[] = []
  initPages()
  function initPages() {}
  function getListPage(): Array<headerItem> {
    return linkItems.map((x) => {
      if (x.id === activePageId.value) {
        x.active = true
      }
      return x
    })
  }
  function setActivePage(pageId: string): void {
    linkItems.forEach((x) => (x.active = false))
    if (linkItems.filter((x) => x.id === pageId).length === 1) activePageId.value = pageId
    else throw new Error('duplicate or missing page')
  }
  function getDashboardListPage(): Array<headerItem> {
    return linkDashboardItems.map((x) => {
      if (x.id === activeDashboardPageId.value) {
        x.active = true
      }
      return x
    })
  }
  function setDashboardActivePage(pageId: string): void {
    linkDashboardItems.forEach((x) => (x.active = false))
    if (linkDashboardItems.filter((x) => x.id === pageId).length === 1)
      activeDashboardPageId.value = pageId
    else throw new Error('duplicate or missing page')
  }
  return { getListPage, setActivePage, getDashboardListPage, setDashboardActivePage }
})
