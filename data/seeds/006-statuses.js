exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("statuses")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("statuses").insert([
        { shot_status: "waiting to start" },
        { shot_status: "ready to start" },
        { shot_status: "in progress" },
        { shot_status: "ready to render" },
        { shot_status: "ready for comp" },
        { shot_status: "pending internal review" },
        { shot_status: "notes received" },
        { shot_status: "client notes received" },
        { shot_status: "pending client review" },
        { shot_status: "internally approved" },
        { shot_status: "client approved" },
        { shot_status: "final" },
        { shot_status: "on hold" },
        { shot_status: "awaiting elements" },
        { shot_status: "awaiting plates" },
        { shot_status: "received plates" },
        { shot_status: "ready for upload" },
        { shot_status: "delivered" },
        { shot_status: "approved" },
        { shot_status: "pending director review" },
        { shot_status: "pending editorial review" },
        { shot_status: "director approved" },
        { shot_status: "2k requested" },
        { shot_status: "2k delivered" }
      ]);
    });
};
