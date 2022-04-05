(ns dcs.pasi.presentation.slide.dataflow)

(def ^:private argument
  [:div.argument
   [:i.mr.statement.fas.fa-circle {:data-id "premise"}]
   [:i.mr.pro.fas.fa-long-arrow-alt-right {:data-id "relation"}]
   [:small {:data-id "conclusion"} "Participatory"]])

(def slide
  [:section
 
   [:section {:data-auto-animate "data-auto-animate"}
    [:h3 "Dataflow"]
   [:div.row 
    [:div.col-1.offset-5
    [:span {:data-id "obs-supplier"} "observation supplier"]]
    ]]
   
   [:section {:data-auto-animate "data-auto-animate"}
    [:h3 "Dataflow"]
    [:span {:data-id "tso"} "TSO"]]
 
   [:section {:data-auto-animate "data-auto-animate"}
    argument]
 
   [:section {:data-auto-animate "data-auto-animate"}
    [:span {:data-id "conclusion"} "Participatory"]
    [:div.row
     [:div.offset-4.col-2
      [:i.relation.pro.fas.fa-long-arrow-alt-right {:data-id           "relation"
                                                    :data-fa-transform "rotate--40"}]]
     [:div.col-2
      [:i.relation.con.fas.fa-long-arrow-alt-left {:data-id           "relation-con"
                                                   :data-fa-transform "rotate-40"}]]]
    [:div.row
     [:div.offset-3.col-2
      [:i.statement.fas.fa-circle {:data-id "premise"}]]
     [:div.offset-2.col-2
      [:i.statement.fas.fa-circle {:data-id "premise-con"}]]]]
 
   [:section {:data-auto-animate "data-auto-animate"}
    [:div.row
     [:div.col-12
      [:i.issue.fas.fa-circle {:data-id "issue"}]]]
    [:div.row
     [:div.col-12
      [:i.relation.issue.fas.fa-long-arrow-alt-up {:data-id "relation-position"}]]]
    [:div.row
     [:div.col-12
      [:span {:data-id "conclusion"} "Participatory"]]]
    [:div.row
     [:div.offset-4.col-2
      [:i.relation.pro.fas.fa-long-arrow-alt-right {:data-id           "relation"
                                                    :data-fa-transform "rotate--40"}]]
     [:div.col-2
      [:i.relation.con.fas.fa-long-arrow-alt-left {:data-id           "relation-con"
                                                   :data-fa-transform "rotate-40"}]]]
    [:div.row
     [:div.offset-3.col-2
      [:i.statement.fas.fa-circle {:data-id "premise"}]]
     [:div.offset-2.col-2
      [:i.statement.fas.fa-circle {:data-id "premise-con"}]]]]])