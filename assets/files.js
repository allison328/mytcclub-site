// SAMPLE DATA ONLY. Every name, address, and number here is fictional.
// In the real portal, the File Opener writes one record per file from the signed contract.
window.AGENT = {
  first: "Sam", name: "Sam Rivera", brokerage: "Sample Realty",
  // Everything below comes from the sign-up form. Allison can fill in or edit any of it by hand.
  phone: "(559) 555-0101", email: "sam@example.com", dre: "00000000",
  joined: "2026-09-15",
  prefs: [
    ["Best way to reach you", "Text"],
    ["Email your clients", "Yes, copy me"],
    ["Client file page", "Email it to me to approve first"],
    ["Review requests", "Yes, please"],
    ["Your files are", "Mostly buyers"],
    ["File types", "Standard resale, Short sale"]
  ],
  access: [
    ["zipForm (C.A.R.)", "Connected", "done"],
    ["SkySlope", "Broker adding me", "waiting"],
    ["DocuSign", "Shared access", "done"]
  ],
  team: [
    { role: "Assistant", name: "Jamie Example", phone: "(559) 555-0110", email: "jamie@example.com", note: "Copy on every file" },
    { role: "Team lead", name: "Pat Sample", phone: "(559) 555-0111", email: "pat@example.com", note: "" }
  ],
  vendors: [
    { role: "Lender", name: "Morgan Ellis", co: "Example Home Loans", phone: "(559) 555-0120" },
    { role: "Escrow", name: "Casey Lane", co: "Sample Title Company", phone: "(559) 555-0103" },
    { role: "Home inspector", name: "", co: "", phone: "" },
    { role: "Termite", name: "", co: "", phone: "" }
  ],
  reviewLinks: [["Google", "#"]]
};
window.FILES = [
  {
    id: "w-sample-ln", address: "1420 W Sample Ln", city: "Visalia, CA 93277", side: "Buyer",
    client: "Jordan", price: 425000, accepted: "2026-09-29", coe: "2026-10-29",
    escrowCo: "Sample Title Company", escrowNo: "SAMPLE-0001", status: "On track",
    dates: [
      { d: "2026-09-29", t: "Offer accepted", n: "The clock starts here", c: "c1" },
      { d: "2026-10-02", t: "Earnest money due to escrow", n: "$4,250 by wire. Always call escrow to verify wiring instructions.", c: "c2" },
      { d: "2026-10-06", t: "Seller disclosures delivered", n: "Including the Natural Hazard report", c: "c3" },
      { d: "2026-10-16", t: "Inspection, appraisal & loan deadlines", n: "Contingency period ends", c: "c4" },
      { d: "2026-10-24", t: "Final walk-through window opens", n: "Within 5 days before closing", c: "c5" },
      { d: "2026-10-29", t: "Close of escrow", n: "Keys at recording", c: "c6" }
    ],
    docs: [
      { t: "Purchase agreement (RPA)", s: "done" }, { t: "Escrow at a Glance sheet", s: "done" },
      { t: "Earnest money receipt", s: "done" }, { t: "Seller disclosures (TDS, SPQ)", s: "waiting", who: "buyer signature" },
      { t: "Natural Hazard Disclosure", s: "done" }, { t: "Home inspection report", s: "done" },
      { t: "Appraisal", s: "waiting", who: "lender" }, { t: "Contingency removal", s: "later" }
    ],
    team: [
      { role: "Listing agent", name: "Taylor Brooks", co: "Example Homes", email: "taylor@example.com", tone: "sand" },
      { role: "Escrow & title", name: "Casey Lane", co: "Sample Title Company", email: "casey@example.com", tone: "aqua" },
      { role: "Lender", name: "Morgan Ellis", co: "Example Home Loans", email: "morgan@example.com", tone: "mist" }
    ]
  },
  {
    id: "example-ct", address: "88 Example Ct", city: "Fresno, CA 93720", side: "Listing",
    client: "Riley", price: 389000, accepted: "2026-10-08", coe: "2026-11-09",
    escrowCo: "Placeholder Escrow", escrowNo: "SAMPLE-0002", status: "Waiting on buyer",
    dates: [
      { d: "2026-10-08", t: "Offer accepted", n: "The clock starts here", c: "c1" },
      { d: "2026-10-13", t: "Earnest money due to escrow", n: "Buyer's deposit due", c: "c2" },
      { d: "2026-10-15", t: "Seller disclosures delivered", n: "Sent for seller signature", c: "c3" },
      { d: "2026-10-25", t: "Contingency period ends", n: "Inspection, appraisal & loan", c: "c4" },
      { d: "2026-11-04", t: "Final walk-through window opens", n: "Within 5 days before closing", c: "c5" },
      { d: "2026-11-09", t: "Close of escrow", n: "Keys at recording", c: "c6" }
    ],
    docs: [
      { t: "Purchase agreement (RPA)", s: "done" }, { t: "Escrow at a Glance sheet", s: "done" },
      { t: "Earnest money receipt", s: "waiting", who: "buyer" }, { t: "Seller disclosures (TDS, SPQ)", s: "waiting", who: "seller answers" },
      { t: "Natural Hazard Disclosure", s: "done" }
    ],
    team: [
      { role: "Buyer's agent", name: "Jamie Cole", co: "Sample Brokers", email: "jamie@example.com", tone: "mist" },
      { role: "Escrow & title", name: "Drew Park", co: "Placeholder Escrow", email: "drew@example.com", tone: "aqua" }
    ]
  },
  {
    id: "placeholder-ave", address: "302 Placeholder Ave", city: "Tulare, CA 93274", side: "Buyer",
    client: "Avery", price: 312500, accepted: "2026-09-16", coe: "2026-10-15",
    escrowCo: "Sample Title Company", escrowNo: "SAMPLE-0003", status: "Closing",
    dates: [
      { d: "2026-09-16", t: "Offer accepted", n: "The clock starts here", c: "c1" },
      { d: "2026-09-19", t: "Earnest money due to escrow", n: "Received", c: "c2" },
      { d: "2026-09-23", t: "Seller disclosures delivered", n: "Signed and returned", c: "c3" },
      { d: "2026-10-03", t: "Contingency period ends", n: "Removed in writing", c: "c4" },
      { d: "2026-10-10", t: "Final walk-through window opens", n: "Within 5 days before closing", c: "c5" },
      { d: "2026-10-15", t: "Close of escrow", n: "Keys at recording", c: "c6" }
    ],
    docs: [
      { t: "Purchase agreement (RPA)", s: "done" }, { t: "Escrow at a Glance sheet", s: "done" },
      { t: "Seller disclosures (TDS, SPQ)", s: "done" }, { t: "Contingency removal", s: "done" },
      { t: "Loan documents", s: "waiting", who: "signing appointment" }, { t: "Compliance file upload", s: "later" }
    ],
    team: [
      { role: "Listing agent", name: "Quinn Harper", co: "Example Homes", email: "quinn@example.com", tone: "sand" },
      { role: "Escrow & title", name: "Casey Lane", co: "Sample Title Company", email: "casey@example.com", tone: "aqua" }
    ]
  }
];
// The demo pretends today is this date so the sample always looks mid-deal.
window.DEMO_TODAY = "2026-10-12";
