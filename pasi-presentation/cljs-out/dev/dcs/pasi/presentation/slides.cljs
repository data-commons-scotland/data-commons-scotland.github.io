(ns dcs.pasi.presentation.slides
  (:require [dcs.pasi.presentation.slide.title :as title]
            [dcs.pasi.presentation.slide.title-drilldown :as title-drilldown]
            [dcs.pasi.presentation.slide.social-impacts :as social-impacts]
            [dcs.pasi.presentation.slide.participatory :as participatory]
            [dcs.pasi.presentation.slide.accounting :as accounting]
            [dcs.pasi.presentation.slide.connecting :as connecting]
            [dcs.pasi.presentation.slide.accessing :as accessing]
            [dcs.pasi.presentation.slide.lastly :as lastly]))

(defn all
  "Add here all slides you want to see in your presentation."
  []
  [title/slide
   title-drilldown/slide
   social-impacts/slide
   participatory/slide
   accounting/slide
   connecting/slide
   accessing/slide
   lastly/slide])




#_(
* participatory
* ideas for how some of the real-world participating orgs might massage their data keeping
* a means for TSOs to evidence their impacts
* a federation of data islands
* provenance and history, ....splice this into the participatory slide
* (low code)
* a 'template' for how-to transact your data and publish (some of) it as Open Data
* <several others - trawl above from 22 Nov 2021 onwards>
)


