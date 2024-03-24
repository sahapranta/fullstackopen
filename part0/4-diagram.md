sequenceDiagram
    participant User
    participant Webpage
    participant Backend

    User->>Webpage: Enters text into text field
    Webpage->>Webpage: Updates UI with entered text
    User->>Webpage: Clicks Save button
    Webpage->>Backend: Sends request to save note
    Backend->>Backend: Processes request
    Backend-->>Webpage: Returns success message
    Webpage-->>User: Displays success message
