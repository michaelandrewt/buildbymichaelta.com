# Category 4 — Paid Advertising

Skills 14–16: ad creative refresh, paid account audits, and A/B test design.

---

## Skill 14 — Ad Creative Refresher

Diagnoses creative fatigue and generates a new hook and angle matrix.

**Why founders use it:**
Ad creative decays. This Skill creates fresh concepts without restarting from scratch.

**When to use it:**
Meta ads, Google ads, LinkedIn ads, TikTok ads, YouTube ads, creative testing.

### Prompt

```
Help me create a Skill called "Ad Creative Refresher" that diagnoses creative fatigue and generates new hooks and angles.
When invoked, ask me for:
1. Platform
2. Current creative
3. Performance metrics
4. Offer
5. Target audience
6. What has stopped working
7. Budget or testing constraints
8. Brand voice
Output:
- Fatigue signals diagnosis
- Hook matrix with 20+ concepts across:
  - Pain-focused angles
  - Aspiration-focused angles
  - Social proof angles
  - Urgency angles
  - Contrarian angles
- Top 5 hooks to test first with rationale
- A/B test structure
- Success metrics
- Platform-specific adaptations
- Format variations
Rules:
- Every concept must be specific to the offer
- Do not fabricate performance causes
- Do not invent testimonials, results, or proof
- Avoid generic ad language
- Recommend tests that isolate one major variable
- Save as a permanent Skill
```

### Required Inputs

1. Platform, current creative, and performance metrics
2. Offer, target audience, and what has stopped working
3. Budget or testing constraints and brand voice

### Output Format

* Fatigue diagnosis and a 20+ concept hook matrix across 5 angle families
* Top 5 hooks to test first with rationale
* A/B test structure, success metrics, platform adaptations, format variations

### Rules

* Every concept must be specific to the offer
* Do not fabricate performance causes or invent testimonials, results, or proof
* Avoid generic ad language
* Recommend tests that isolate one major variable

---

## Skill 15 — Paid Ads Auditor

Runs a structured audit of Google Ads or Meta accounts.

**Why founders use it:**
Paid accounts often waste budget on irrelevant audiences, weak creative, poor bid strategy, or low-intent traffic.

**When to use it:**
Paid media audits, performance reviews, wasted spend checks, campaign optimization.

### Prompt

```
Help me create a Skill called "Paid Ads Auditor" that runs structured audits of paid advertising accounts.
When invoked, ask me for:
1. Platform: Google Ads, Meta, LinkedIn, TikTok, YouTube, or other
2. Account performance data: CSV or key metrics
3. Business goal
4. Budget allocation
5. Top campaigns
6. Conversion event definition
7. Target audience
8. Time period being analyzed
Output:
- Wasted spend diagnosis
- Campaigns with spend and zero conversions
- Quality Score or relevance issues, if applicable
- Audience overlap analysis
- Creative fatigue signals
- Bid strategy mismatches
- Tracking or attribution concerns
- Prioritized fix list: impact vs. effort
- Quick wins implementable in under 1 hour
Rules:
- Do not make claims unsupported by the provided data
- Clearly label suspected issues vs. confirmed issues
- Prioritize fixes by business impact
- Avoid vague recommendations like "improve targeting"
- Save as a permanent Skill
```

### Required Inputs

1. Platform and account performance data (CSV or key metrics)
2. Business goal, budget allocation, and top campaigns
3. Conversion event definition, target audience, and time period

### Output Format

* Wasted spend diagnosis and zero-conversion campaigns
* Quality/relevance issues, audience overlap, creative fatigue, bid mismatches, tracking concerns
* Prioritized fix list (impact vs. effort) and under-1-hour quick wins

### Rules

* Do not make claims unsupported by the provided data
* Clearly label suspected vs. confirmed issues
* Prioritize fixes by business impact
* Avoid vague recommendations like "improve targeting"

---

## Skill 16 — A/B Test Setup Generator

Creates statistically rigorous A/B test plans for marketing experiments.

**Why founders use it:**
Many teams run tests without enough power and make decisions based on noise.

**When to use it:**
Landing page tests, email tests, ad tests, pricing tests, onboarding tests, CTA tests.

### Prompt

```
Help me create a Skill called "A/B Test Setup Generator" that designs rigorous marketing experiments.
When invoked, ask me for:
1. What I want to test
2. Current baseline metric
3. Minimum improvement needed before acting
4. Audience size available
5. Platform
6. Current conversion volume
7. Test constraints
8. Business decision the test should inform
Output:
- Specific, falsifiable hypothesis
- Control definition
- Variant definition
- Primary success metric
- Secondary guardrail metrics
- Sample size guidance
- Recommended test duration
- Analysis plan
- Common mistakes to avoid for this test type
Rules:
- Warn the user if the available sample is too small
- Do not overstate statistical confidence
- Recommend simpler tests when traffic is limited
- Isolate one main variable where possible
- Save as a permanent Skill
```

### Required Inputs

1. What to test, baseline metric, and minimum improvement needed
2. Audience size, platform, and current conversion volume
3. Test constraints and the business decision the test should inform

### Output Format

* Falsifiable hypothesis with control and variant definitions
* Primary success metric, guardrail metrics, sample size guidance, test duration
* Analysis plan and common mistakes to avoid for this test type

### Rules

* Warn the user if the available sample is too small
* Do not overstate statistical confidence
* Recommend simpler tests when traffic is limited
* Isolate one main variable where possible
