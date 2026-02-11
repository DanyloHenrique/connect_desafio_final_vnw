import { useParams } from 'react-router'

import { Section } from '@/components/section'

import { sections } from '@/domain/data/sections'

const PageFeature = () => {
  const params = useParams()

  const sectionFound = sections.find((section) => {
    return section.id === Number(params.id)
  })

  return (
    <main>
      <Section
        title={sectionFound.title}
        itemList={sectionFound.data}
        labelButton={sectionFound.labelButton}
      />
    </main>
  )
}

export default PageFeature
