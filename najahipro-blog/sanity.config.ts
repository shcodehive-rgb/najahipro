'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  
  // هنا كنعطوه Schema لي صاوبنا (post)
  schema: {
    types: schemaTypes,
  },

  plugins: [
    // حيدنا {structure} باش يخدم أوتوماتيك ويحيد الكراش
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})