$body = @{
  host = "topdoglead.com"
  key = "d45a358b7b72bac9f4a9a151928606d6"
  keyLocation = "https://topdoglead.com/d45a358b7b72bac9f4a9a151928606d6.txt"
  urlList = @(
    "https://topdoglead.com/",
    "https://topdoglead.com/services",
    "https://topdoglead.com/services/insurances-leads",
    "https://topdoglead.com/services/live-transfer-leads",
    "https://topdoglead.com/services/inbound-call-marketing",
    "https://topdoglead.com/industry",
    "https://topdoglead.com/industry/final-expense",
    "https://topdoglead.com/industry/auto-insurance",
    "https://topdoglead.com/industry/medicare-insurance",
    "https://topdoglead.com/industry/home-insurance",
    "https://topdoglead.com/industry/solar",
    "https://topdoglead.com/industry/pest-control",
    "https://topdoglead.com/industry/roofing",
    "https://topdoglead.com/industry/motor-vehicle-accident",
    "https://topdoglead.com/industry/home-insurance/sales",
    "https://topdoglead.com/industry/final-expense/sales",
    "https://topdoglead.com/industry/auto-insurance/sales",
    "https://topdoglead.com/industry/pest-control/sales",
    "https://topdoglead.com/industry/roofing/sales",
    "https://topdoglead.com/industry/medicare-insurance/sales",
    "https://topdoglead.com/industry/motor-vehicle-accident/sales",
    "https://topdoglead.com/industry/solar/sales",
    "https://topdoglead.com/blog",
    "https://topdoglead.com/blog/grow-business-ppc-houston",
    "https://topdoglead.com/blog/lead-generation-strategy-that-drives-results",
    "https://topdoglead.com/blog/high-quality-inbound-leads-quality-over-quantity",
    "https://topdoglead.com/blog/auto-insurance-leads-peace-of-mind",
    "https://topdoglead.com/blog/high-intent-leads-scalable-growth",
    "https://topdoglead.com/blog/lead-generation-myths-busted",
    "https://topdoglead.com/blog/outsourcing-lead-generation-experts",
    "https://topdoglead.com/blog/pay-per-call-lead-generation",
    "https://topdoglead.com/faq",
    "https://topdoglead.com/faq?page=2",
    "https://topdoglead.com/faq?page=3",
    "https://topdoglead.com/solution/pay-per-call",
    "https://topdoglead.com/about",
    "https://topdoglead.com/contact"
  )
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" -Method Post -ContentType "application/json" -Body $body
Write-Host "Submitted successfully." -ForegroundColor Green
$response