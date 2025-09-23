# 📘 LeetCode Solutions

This repository contains my solved LeetCode problems, synced automatically with GitHub Actions.

---

## 📂 Solutions by Language

{{#each langs}}

### {{this}}

{{#each difficulties}}

- {{@key}}
  {{#each this}}
  - [{{title}}](problems/{{lang}}/{{difficulty}}/{{title_slug}}.{{lang_ext}}) {{#if (eq difficulty "Easy")}}![Easy](https://img.shields.io/badge/Easy-brightgreen.svg){{/if}}{{#if (eq difficulty "Medium")}}![Medium](https://img.shields.io/badge/Medium-yellow.svg){{/if}}{{#if (eq difficulty "Hard")}}![Hard](https://img.shields.io/badge/Hard-red.svg){{/if}}
    {{/each}}
    {{/each}}

{{/each}}

---

> Synced using [leetcode-sync](https://github.com/joshcai/leetcode-sync)
