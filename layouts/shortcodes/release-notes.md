{{ $url  := .Get "file"}}
{{ $data := getJSON $url }}
{{ range $data }}
{{ if .latest }}
{{ printf "## Version %s (latest)" .version | markdownify }}
{{ else }}
{{ printf "## Version %s" .version | markdownify }}
{{ end }}
{{ "### What's New" | markdownify }}

{{ range .new }}
{{ printf "- %s" . | markdownify }}
{{ end }}

{{ "### Known issues" | markdownify }}
{{ range .knownIssues }}
{{ printf "- %s" . | markdownify }}
{{ end }}
{{ end }}