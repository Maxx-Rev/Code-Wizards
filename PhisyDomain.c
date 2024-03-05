#include <stdio.h>
#include <string.h>

int isPhishing(const char *url) {
    if (strstr(url, "https://") != url) {
        return 1;
    }

    if (strstr(url, ".exe") || strstr(url, ".zip")) {
        // Phishing websites may try to distribute malware in executable files or zip archives
        return 1;
    }

    if (strstr(url, "paypal") || strstr(url, "bank")) {
        // Phishing websites often mimic legitimate financial institutions
        return 1;
    }

    return 0; 
}

int main() {
    char url[100];

    printf("Enter the URL to check for phishing: ");
    scanf("%s", url);

    if (isPhishing(url)) {
        printf("Warning: This URL might be a phishing website!\n");
    } else {
        printf("This URL seems safe.You might go ahead.\n");
    }

    return 0;
}
