// ============================================================
//  Feature catalogs opened by a project's "Features" button.
//  Referenced from data.js as `details: window.FEATURES.minibank`.
//
//  section: { id, label, intro, groups: [ { name, intro?, tone?, items: [...] } ] }
//  items: ["Subheading", [name, description], [name, description], "Next subheading", ...]
//  tone (optional): "error" | "warning" | "info" — colors the group badge.
// ============================================================

window.FEATURES = {
  minibank: {
    button: "Features",
    title: "STAT-MiniBank — what's inside",
    subtitle: "Diagnostics, data operations, version control, and 100+ no-code analysis tools.",
    sections: [
      {
        id: "diagnostics",
        label: "Diagnostics",
        intro:
          "Every saved dataset version is checked automatically before analysis. Checks are grouped by severity: errors block analysis until fixed, warnings flag data-quality risks, and info notes add context. Many warnings link straight to the operation that fixes them.",
        groups: [
          {
            name: "Errors — block analysis",
            tone: "error",
            items: [
              ["No columns", "The dataset has no columns."],
              ["Empty dataset", "The dataset has no rows after missing values are normalized."],
              ["Duplicate column names", "Two or more columns share a name."],
              ["Invalid column name", "A column name is empty or only whitespace."],
              ["Unparseable dates", "At least 50% of values in a date column cannot be parsed."],
            ],
          },
          {
            name: "Warnings — review, analysis can run",
            tone: "warning",
            items: [
              ["Dataset missingness", "More than 10% of all cells are missing; graded mild, moderate, high, or extreme (>75%)."],
              ["Column missingness", "A column is more than 5% missing; graded mild to extreme."],
              ["All-missing column", "Every value in a column is missing (blank, NA, NaN, null, ?, …)."],
              ["Duplicate rows", "Fully identical rows are present."],
              ["Mixed types", "One column mixes numbers, text, dates, or booleans."],
              ["Numbers stored as text", "A text column whose every value parses as a number."],
              ["Zero variance", "A numeric column is constant."],
              ["Outliers (IQR rule)", "Values beyond Q1 − 1.5×IQR or Q3 + 1.5×IQR (columns with ≥ 8 values)."],
              ["Skewed distribution", "|skewness| ≥ 2 in a numeric column with ≥ 20 values."],
              ["Unexpected negatives", "Negative values in a column named like a count, age, or quantity."],
              ["Low cardinality", "A text column with at most 2 distinct values across more than 10 rows."],
              ["High cardinality", "A text column whose distinct values exceed 50% of its rows (likely an ID or free text)."],
              ["Imbalanced categories", "One value makes up ≥ 90% of a text column."],
              ["Leading/trailing spaces", "Text values carry stray whitespace."],
              ["Scientific notation as text", "Strings like 1.2e3 stored as text."],
              ["Future dates", "Dates later than today (UTC)."],
              ["Date gaps", "A gap longer than 3× the median gap (and 30+ days) between sorted dates."],
            ],
          },
          {
            name: "Info — helpful context",
            tone: "info",
            items: [
              ["Many columns", "More than 100 columns; consider removing unused ones."],
              ["Likely ordinal", "Integer-like column with 2–10 values that may be ordered categories; scored from name and value patterns."],
              ["Likely identifier", "Every non-missing value is unique — use it as an ID, not a variable."],
              ["Index column", "Sequential integers 1…N, all unique."],
              ["Derived column", "Name ends in _pct, _rate, _total, _sum, _avg, _mean, or _score."],
              ["Percentage column", "Percent-like name with all values between 0 and 100."],
              ["Highly correlated pair", "Pearson |r| ≥ 0.95 between two numeric columns (up to 15 pairs)."],
              ["Clean dataset", "No errors or warnings found."],
            ],
          },
        ],
      },
      {
        id: "operations",
        label: "Data Operations",
        intro:
          "Edit, clean, and reshape data in a spreadsheet-style grid without code. Click row numbers or headers to select (Shift+click for several). Edits stay a draft until you save; saving creates a new version, so nothing is lost. Destructive operations show what will change before they apply.",
        groups: [
          {
            name: "Manual Edit",
            items: [
              ["Edit cell values", "Double-click any cell to edit it in place; columns can be sorted and filtered."],
              "Rows",
              ["Add rows", "Insert after the last selected row, or at the end."],
              ["Duplicate rows", "Copy the selected rows."],
              ["Delete row range", "Remove a contiguous range of rows by position."],
              ["Delete selected rows", "Remove the selected rows."],
              "Columns",
              ["Add columns", "Insert after the last selected column, or at the end."],
              ["Duplicate columns", "Copy the selected columns under new names."],
              ["Rename column", "Give a column a new name."],
              ["Delete column range", "Remove a contiguous range of columns by position."],
              ["Delete selected columns", "Remove the selected columns."],
            ],
          },
          {
            name: "Clean Data",
            items: [
              "Missing",
              ["Standardize missing", "Turn blanks, N/A, NaN, null, ?, -, “missing”, and similar tokens into a single NA."],
              ["Impute missing", "Numbers: mean, median, mode, constant, forward/backward fill, or KNN. Dates: median, mode, or constant date, forward/backward fill. Text & booleans: mode, constant, or fill."],
              ["Keep complete rows", "Keep only rows with no missing values in any column."],
              "Sparse",
              ["Remove sparse rows", "Drop rows whose share of missing cells exceeds a threshold (default 50%)."],
              ["Remove sparse columns", "Drop columns whose share of missing cells exceeds a threshold (default 50%)."],
              "Outliers",
              ["Handle outliers", "Remove rows flagged in any (or all) selected columns by IQR, Z-score, modified Z-score, percentile, or a custom range — previewed first."],
              "Other",
              ["Remove duplicate rows", "Drop rows identical across all columns."],
              ["Remove constant columns", "Drop columns whose non-missing values are all the same."],
            ],
          },
          {
            name: "Transform",
            items: [
              "Rows",
              ["Aggregate rows", "Collapse rows sharing an ID into one, with a rule per column: first/last, mean, median, sum, min/max, mode, earliest/latest, counts, unique join, any/all true."],
              "Columns",
              ["Encode columns", "One-hot, label, ordinal (your order), true/false → 0/1, date parts, or elapsed seconds; keep or drop the originals."],
              ["Convert types", "Change a column to text, whole number, number, true/false, or date."],
              ["Scale", "Z-score, min-max, max-absolute, mean or median centering, or robust scaling — as a new column or in place."],
              ["Create derived columns", "Build a column from an arithmetic formula or conditional rules, row by row."],
              "Text",
              ["Trim leading spaces", "Remove whitespace at the start of text values, with a preview of affected cells."],
              ["Change case", "Convert text to UPPERCASE or lowercase."],
              "Shape",
              ["Transpose", "Swap rows and columns; row labels are auto-generated or taken from a column."],
            ],
          },
        ],
      },
      {
        id: "versions",
        label: "Version Control",
        intro:
          "Each dataset keeps an immutable history — v1 (original), v2, v3… Diagnostics, analyses, ML pipelines, evaluations, and comparisons are all tied to the exact version they ran on, so results stay reproducible. Files are stored per user, dataset, and version (locally or in Amazon S3).",
        groups: [
          {
            name: "Version Actions",
            items: [
              ["Save", "Store the grid as a new version (v2, v3, …) and make it current, with an optional note."],
              ["Save As New", "Branch into a separate dataset with its own version history."],
              ["Discard changes", "Drop unsaved edits and reload the current saved version."],
              ["Preview version", "Open any earlier version read-only."],
              ["Restore version", "Make an earlier version current again, without creating a new one."],
              ["Edit version note", "Label a version in up to 30 characters (e.g. “Median-imputed missing”); the data is unchanged."],
              ["Delete version", "v1 and the only remaining version can't be deleted, nor can a version used by saved pipelines, feature sets, or regression results. Deleting the current version makes the latest remaining one current."],
            ],
          },
        ],
      },
      {
        id: "analysis",
        label: "Analysis Tools",
        intro:
          "No-code analysis across five areas. Each tool opens a guided panel, checks which columns are eligible, and returns results with plain-language conclusions, warnings, and downloadable plots.",
        groups: [
          {
            name: "Data Exploration",
            intro: "Tables, charts, relationships, and data-quality views.",
            items: [
              "Tables & Summaries",
              ["Descriptive Table", "Mean (SD) or median [IQR] and count (%), overall or stratified by a group."],
              ["Numeric Summary", "Count, missing, mean, median, SD, min/max, quartiles, IQR, skewness, and kurtosis."],
              ["Frequency Table", "Counts and percentages, with sorting, top-N plus “Other”, and optional missing category."],
              ["Percentiles / Quantiles", "Basic, extended, or custom quantiles with a choice of interpolation."],
              ["Categorical Summary", "Levels, modes, and distinct counts."],
              "Distribution & Charts",
              ["Histogram", "Distribution of one numeric column."],
              ["Bar Chart", "Counts or percentages by category."],
              ["Boxplot", "Quartiles and outliers, optionally grouped."],
              ["Density Plot", "Kernel density estimate."],
              ["Q-Q Plot", "Compare quantiles against a normal distribution."],
              ["Date Distribution", "Record counts over time."],
              "Relationships & Reliability",
              ["Scatter Plot", "Relationship between two numeric columns."],
              ["Value / Rank Correlation", "Value-based (Pearson) or rank-based correlation, with 95% confidence intervals and a heatmap."],
              ["Repeated Reliability", "Consistency of repeated measurements (ICC)."],
              ["Rater / Method Agreement", "Agreement between raters or devices, incl. Bland–Altman plots."],
              "Data Quality",
              ["Missingness Summary", "Missing counts and rates per column."],
              ["Missingness Heatmap", "Where missing values occur across rows."],
              ["Outlier Analysis", "Read-only outlier detection with several methods."],
            ],
          },
          {
            name: "Statistical Testing",
            intro: "Focused inferential tests; the app picks a defensible method automatically and explains why.",
            items: [
              "Numeric Comparisons",
              ["1 Sample vs Reference", "One-sample t-test, z-test, or Wilcoxon signed-rank."],
              ["2 Independent Groups", "Automatic selection (Welch t-test by default) or Mann-Whitney U."],
              ["2 Paired Measurements", "Paired t-test or Wilcoxon signed-rank."],
              ["3+ Independent Groups", "One-way ANOVA, Welch ANOVA, or Kruskal-Wallis."],
              ["3+ Repeated Measurements", "Repeated-measures ANOVA or Friedman."],
              "Categorical Comparisons",
              ["1 Proportion vs Reference", "One-sample proportion z-test or exact binomial test."],
              ["2 Independent Proportions", "Two-proportion z-test or Fisher exact."],
              ["Categorical Association", "Chi-square, or Fisher exact for sparse 2×2 tables."],
              ["Paired Binary Change", "McNemar exact or asymptotic."],
              "Variance Comparisons",
              ["2-Group Equal Variance", "F-test or Brown-Forsythe."],
              ["3+ Group Equal Variance", "Levene or Brown-Forsythe."],
              "Distribution Comparisons",
              ["2-Sample KS Test", "Kolmogorov-Smirnov two-sample test."],
              ["Anderson-Darling k-Sample", "Do two or more samples share a distribution?"],
              "Auto-Recommend",
              ["Auto-Recommend Test", "Suggests a test from your goal and variable roles."],
            ],
          },
          {
            name: "Statistical Regression",
            intro: "Inferential regression with assumption checks, model selection, and saved evaluations.",
            items: [
              "Regression Models",
              ["Simple Linear Regression", "One numeric predictor."],
              ["Multiple Linear Regression", "Several predictors, with residual and collinearity diagnostics."],
              ["Polynomial Regression", "Curved relationships."],
              ["Logistic Regression", "Binary outcomes, with a chosen positive class and prediction threshold."],
              ["Poisson Regression", "Count outcomes, with an optional exposure column and a dispersion check."],
              ["Negative Binomial Regression", "Overdispersed counts."],
              ["Ordinal Logistic Regression", "Ordered categorical outcomes, with a logit or probit link."],
              "Model Selection",
              ["Best Subset Selection", "Search predictor subsets by AIC, BIC, or adjusted R²."],
              ["Forward Selection", "Add predictors one at a time while the criterion improves."],
              ["Backward Selection", "Remove predictors one at a time while the criterion improves."],
              ["Stepwise Selection", "Add and remove predictors, starting forward or backward."],
              "Evaluate & Compare",
              ["Compare Models", "Side-by-side fit statistics on a common row set."],
              ["Saved Evaluations", "Reopen, rename, and download fitted models."],
              ["Saved Comparisons", "Reopen and update comparison tables."],
            ],
          },
          {
            name: "Machine Learning",
            intro: "Reusable, leakage-safe pipelines; every run saves an evaluation tied to its dataset version.",
            items: [
              "Pipeline Setup",
              ["Create Pipeline", "12-step wizard: task, target, features, split, cross-validation, missing values, encoding, scaling, seed, readiness."],
              ["Saved Pipelines", "Reuse or edit saved configurations."],
              "Classification",
              ["Logistic Regression", "Linear baseline with interpretable coefficients."],
              ["Decision Tree", "Rule-based splits that are easy to explain."],
              ["Random Forest", "Ensemble of trees; robust default."],
              ["Gradient Boosting", "Sequentially boosted trees."],
              ["Support Vector Machine", "Maximum-margin classifier."],
              ["K-Nearest Neighbors", "Classify by the closest training rows."],
              ["Naive Bayes", "Fast probabilistic classifier."],
              "Numeric Prediction",
              ["Ridge (L2)", "Regularized linear model that shrinks coefficients."],
              ["LASSO (L1)", "Regularized linear model that can zero out features."],
              ["Elastic Net (L1 + L2)", "Blend of Ridge and LASSO."],
              ["Regression Tree", "Rule-based numeric prediction."],
              ["Random Forest", "Ensemble of regression trees."],
              ["Gradient Boosting", "Sequentially boosted regression trees."],
              ["Support Vector Machine", "Support vector regression."],
              ["K-Nearest Neighbors", "Average of the closest training rows."],
              "Clustering",
              ["K-Means", "Partition rows into k clusters."],
              ["Agglomerative Clustering", "Hierarchical, bottom-up clustering."],
              ["Gaussian Mixture Model", "Soft, probabilistic clusters."],
              ["DBSCAN", "Density-based clusters that also flag noise."],
              "Dimensionality Reduction",
              ["Principal Component Analysis", "Summarize many features in a few components."],
              "Feature Selection",
              ["Mutual Information", "Rank features by shared information with the target."],
              ["Select From Model", "Keep features a fitted model finds important."],
              ["Recursive Feature Elimination", "Drop the weakest features step by step."],
              "Anomaly Detection",
              ["Isolation Forest", "Isolate unusual rows with random splits."],
              ["Local Outlier Factor", "Flag rows in sparse neighborhoods."],
              ["One-Class SVM", "Learn a boundary around normal rows."],
              ["PCA Reconstruction Error", "Flag rows PCA reconstructs poorly."],
              "Evaluate & Predict",
              ["Compare Models", "Side-by-side metrics with best-value highlighting."],
              ["Saved Evaluations", "Metrics, reports, and plots for every trained model."],
              ["Saved Comparisons", "Reopen, update, and download comparison tables."],
            ],
          },
          {
            name: "Text Mining",
            intro: "From word counts to topics, sentiment, and embeddings.",
            items: [
              "Text Summary",
              ["Basic Text Statistics", "Document length, vocabulary, and text-quality signals."],
              ["Word Frequency", "Rank individual words."],
              ["N-Gram Frequency", "Find repeated phrases."],
              ["TF-IDF Keywords", "Terms distinctive to selected documents."],
              "Text Visualization",
              ["Word Cloud", "Weighted layout of common terms."],
              ["Keyword Bar Chart", "Configurable keyword ranking."],
              ["Document Similarity Heatmap", "Pairwise cosine, Euclidean, Manhattan, or Jaccard similarity."],
              ["Keyword Network", "Keywords that co-occur within documents."],
              "Text Analysis",
              ["Sentiment Analysis", "Lexicon-based positive, neutral, or negative labels, with negation and intensifier handling."],
              ["Topic Modeling", "Latent themes via LDA or non-negative matrix factorization."],
              ["Document Clustering", "Group documents with K-Means or agglomerative clustering."],
              ["Similarity Search", "Rank the documents most similar to a query."],
              ["Named Entity Recognition", "Rule-based extraction of people, organizations, dates, money, percentages, emails, and URLs."],
              "Text Feature Engineering",
              ["Text Preprocessing", "Preview cleaned text and save it as a column."],
              ["Bag of Words", "Sparse document-term counts."],
              ["TF-IDF Vectorization", "Sparse TF-IDF matrix."],
              ["Word / Document Embeddings", "Dense, low-dimensional document vectors and their nearest neighbors."],
              ["Text Dimension Reduction", "Reduce text vectors to a few numeric components."],
            ],
          },
        ],
      },
    ],
  },
  esn: {
    button: "Features",
    title: "Emergency Social Network — what's inside",
    subtitle: "Real-time communication, safety and preparedness tools, and administration for a community emergency network.",
    sections: [
      {
        id: "communication",
        label: "Communication",
        intro:
          "Citizens join the community, share how they are doing, and talk publicly or privately. Updates arrive in real time over Socket.IO, so new messages, announcements, and online status appear without refreshing.",
        groups: [
          {
            name: "Messaging",
            items: [
              ["Public chat", "Community-wide message wall; each message shows the sender's current status."],
              ["Private chat", "One-to-one conversations with a conversation list, unread counts, and read tracking."],
              ["Announcements", "Community-wide notices that only coordinators and administrators can post."],
              ["Share status", "Set yourself to OK, Help, Emergency, or Undefined; it appears next to your name everywhere."],
              ["Directory", "Every citizen with online/offline presence and their current status."],
            ],
          },
          {
            name: "Search",
            items: [
              ["Search citizens", "Find people by username or by status."],
              ["Search messages", "Search public messages, private conversations, and announcements."],
              ["Smart filtering", "Stop words are ignored and results are paginated, 10 at a time by default."],
            ],
          },
        ],
      },
      {
        id: "safety",
        label: "Safety & Preparedness",
        intro:
          "Tools for before and during an emergency — live hazard data, contacts and drills, supplies, group preparedness plans, and a family evacuation plan.",
        groups: [
          {
            name: "Hazards",
            items: [
              ["Live hazard feed", "Earthquakes from USGS and wildfires from CAL FIRE, refreshed automatically."],
              ["Filter & sort", "Filter by type, time window, and severity; sort by latest or by distance from your location."],
              ["Hazard snapshots", "Select hazards to get preparation guidance, save it, and share it into public or private chat."],
            ],
          },
          {
            name: "Contacts & Drills",
            items: [
              ["Emergency contacts", "Keep a personal list of emergency contacts with notification preferences."],
              ["Emergency drills", "Email selected contacts a one-time drill link with a 1–30 minute time limit and track who responds."],
              ["Drill history", "Review past drills and their responses."],
            ],
          },
          {
            name: "Supplies",
            items: [
              ["Evacuation checklists", "Build supply checklists from a catalog, keep several, and mark one as default."],
              ["Missing items", "See which checklist items you still need."],
              ["Supply sharing", "Post spare supplies; others request them, and requests move through pending, approved or rejected, received, or cancelled."],
            ],
          },
          {
            name: "Plans",
            items: [
              ["Preparedness groups", "Create a group for a disaster type, invite citizens who confirm or decline, and chat as a group."],
              ["AI group plans", "Generate preparedness plans in three styles — balanced, resource-first, or safety-first (Strategy pattern)."],
              ["Family evacuation plan", "Invite family members and agree on a safe place on a map."],
              ["Family check-in", "Members report Unknown, En Route, Arrived, or Need Help (with a location), updated live for the family."],
              ["AI preparedness assistant", "Q&A grounded in a curated preparedness guide: a LangGraph corrective-RAG flow that grades retrieved context, rewrites the query when needed, and checks answers for hallucination."],
            ],
          },
        ],
      },
      {
        id: "accounts",
        label: "Accounts & Admin",
        intro:
          "Three roles — citizen, coordinator, and administrator — with administrator-only tools for managing users and keeping the system healthy under load.",
        groups: [
          {
            name: "Accounts & Security",
            items: [
              ["Join & sign in", "Username and password with live validation, a password-strength meter, a CAPTCHA, and an emailed verification code."],
              ["Profile", "View your account and change your password with email verification."],
              ["Rate limiting", "Separate limits for general API calls and login attempts, adjustable by administrators."],
              ["Private data handling", "Private messages, emergency contacts, and safe places are stored encoded rather than as plain text."],
            ],
          },
          {
            name: "Administration",
            items: [
              ["User management", "Search users and edit a username, password, role, or active/inactive status; affected users are notified in real time and can be signed out."],
              ["Rate-limiter console", "View and change limits, and run a security test against them."],
              ["Performance speed test", "Administrator-run load test; normal use is paused while it runs."],
              ["Database health & backup", "Check database health and sync a backup database from the primary; at startup the app falls back to the backup if the primary is unavailable."],
            ],
          },
        ],
      },
      {
        id: "engineering",
        label: "Engineering",
        intro: "How it is built.",
        groups: [
          {
            name: "Stack & Architecture",
            items: [
              ["Backend", "Node.js and Express REST API, documented with OpenAPI / Swagger."],
              ["Real time", "Socket.IO events for messages, announcements, presence, and family plans."],
              ["Data", "PostgreSQL through Sequelize, behind a data-access layer with a backup database."],
              ["Frontend", "Mobile-first HTML, CSS, and vanilla JavaScript."],
              ["Auth", "JWT sessions with hashed passwords."],
              ["Design", "OOAD/UML with MVC, Observer, and Strategy patterns (search and plan generation)."],
            ],
          },
          {
            name: "Quality",
            items: [
              ["Automated tests", "Jest unit and integration tests, with an in-memory PostgreSQL (pg-mem) for isolation."],
              ["Continuous integration", "GitHub Actions runs the test suite on every change."],
            ],
          },
        ],
      },
    ],
  },
  civicsnap: {
    button: "Features",
    title: "CivicSnap — what's inside",
    subtitle: "An AI agent that turns a photo into a correctly routed city service request, with the safeguards kept in code.",
    sections: [
      {
        id: "agent",
        label: "Agent Pipeline",
        intro:
          "The model contributes understanding; the code keeps the guarantees. An orchestrator fixes the order — safety before routing, routing before composing — and no step can be skipped because a model suggested it.",
        groups: [
          {
            name: "Understand",
            items: [
              ["Vision analysis", "A multimodal model (OpenAI, Gemini, or Anthropic) reads the photo into a strict, Zod-validated schema."],
              ["Seen vs. guessed", "What the model can see is kept apart from what it infers; guesses are shown but never filed."],
              ["Confidence & risk", "A confidence band instead of a fake percentage, plus risk signals and boxes around faces and license plates."],
              ["Clarifying questions", "At most three, each tied to one missing field that changes the report."],
            ],
          },
          {
            name: "Decide",
            items: [
              ["Safety escalation", "Five deterministic rules — injury or violence, fire or gas, electrical, structural, road-blocking — stop the 311 flow and point to 911 or PG&E."],
              ["Scope filter", "Recognizes non-public issues, private property, and other agencies (noise → police non-emergency, parking, animal control, housing → its own topic); the resident can override."],
              ["Jurisdiction routing", "Point-in-polygon and distance checks (Turf.js) over hand-traced GeoJSON decide between the City of Mountain View, Caltrans state routes, and County roads; near a boundary, the resident confirms the pin."],
              ["Duplicate detection", "Scores location 35%, category 25%, text 20%, image 15%, recency 5%, gated to 120 m; strong matches (≥ 0.70) are offered to follow, never merged automatically."],
            ],
          },
          {
            name: "Act",
            items: [
              ["Form filling", "Fills a mirror of Mountain View's real Ask MV (Comcate) form, using the city's own topic IDs."],
              ["Field provenance", "Every field shows where its value came from — the photo, an answer, the map pin, or a road-ownership lookup."],
              ["Blank over wrong", "Anything the agent cannot determine is left empty and flagged, never invented."],
            ],
          },
        ],
      },
      {
        id: "resident",
        label: "Resident Experience",
        intro: "Built for someone standing on a sidewalk with a phone: one action to start, one screen to review, one tap to send.",
        groups: [
          {
            name: "Phone App",
            items: [
              ["Installable PWA", "Home-screen icon, full-screen mode, rear camera, GPS, haptics, and safe-area layout."],
              ["Works offline", "A service worker serves the app shell from cache and falls back to cache for API calls; photos are never cached."],
              ["Privacy redaction", "Faces and license plates are blurred in the browser; only the blurred copy is attached."],
            ],
          },
          {
            name: "Screens",
            items: [
              ["One-screen review", "See the filled form, edit anything, and confirm with one tap."],
              ["Emergency screen", "Stops the report and lists 911 and PG&E numbers — the app never dials for you."],
              ["Not a city request", "Explains why, suggests where to go instead, and lets you report anyway."],
              ["My reports", "“Waiting on you” count, tiles for with-the-agency, resolved, and not filed, and per-report progress from Submitted to Resolved."],
            ],
          },
        ],
      },
      {
        id: "engineering",
        label: "Safeguards & Engineering",
        intro: "Guarantees live in code, not in a prompt — and every one is covered by tests.",
        groups: [
          {
            name: "Safeguards",
            items: [
              ["Case state machine", "17 states with an explicit transition table; anything not listed is rejected."],
              ["Confirmation hash", "Confirming signs a hash of exactly what will be sent; any later edit invalidates it."],
              ["Sandbox submission", "Every reference is SANDBOX-prefixed; no government system is contacted."],
              ["Model fallback", "With no key, a timeout, or a failure, the app serves labeled demo data instead of pretending; rate-limit waits follow the provider's Retry-After."],
            ],
          },
          {
            name: "Stack & Quality",
            items: [
              ["App", "Next.js 15 and React 19 in TypeScript, styled with Tailwind CSS v4."],
              ["Data & maps", "Built-in node:sqlite storage, MapLibre GL with OpenStreetMap tiles."],
              ["Tests", "138 Vitest tests covering safety, scope, routing, duplicates, form filling, and the state machine."],
              ["Evaluation", "An eval harness over labeled cases, a live-server smoke test, and a one-command model-key check."],
            ],
          },
        ],
      },
    ],
  },
};
