/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79o9gyx8bv1k1cb")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79o9gyx8bv1k1cb")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
