# Introduction

## Source Code
The Code for the Java SDK can be found here:

- https://github.com/brifle-de/brifle-sdk-java

You can compile the SDK yourself and add it to your project.
It is tested for Java 17+.
Some of the unit test may fail because the require authentication information for the sandbox environment. You can compile the SDK without running the tests.
```bash
gradle build -x test 
```

## Gradle Installation

```groovy
dependencies {
    implementation group: 'de.brifle', name: 'brifle-sdk-java', version: '0.1.3'
}
```

## Maven Installation

```xml
<dependency>
    <groupId>de.brifle</groupId>
    <artifactId>brifle-sdk-java</artifactId>
    <version>0.1.3</version>
</dependency>
```
