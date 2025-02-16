"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3707],{71124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=i(86070),t=i(76113);const a={id:"hadoop-resource-integration",title:"Using Hadoop Resource in Flink on Kubernetes",sidebar_position:2},r=void 0,s={id:"platform/k8s/hadoop-resource-integration",title:"Using Hadoop Resource in Flink on Kubernetes",description:"Using Apache Hadoop resource in Flink on Kubernetes",source:"@site/docs/platform/k8s/2.hadoop-resource-integration.md",sourceDirName:"platform/k8s",slug:"/platform/k8s/hadoop-resource-integration",permalink:"/docs/platform/k8s/hadoop-resource-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/docs/platform/k8s/2.hadoop-resource-integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"hadoop-resource-integration",title:"Using Hadoop Resource in Flink on Kubernetes",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Flink on Kubernetes",permalink:"/docs/platform/k8s/flink-on-k8s"},next:{title:"Kubernetes PVC Resource Usage",permalink:"/docs/platform/k8s/k8s-pvc-integration"}},l={},d=[{value:"Using Apache Hadoop resource in Flink on Kubernetes",id:"using-apache-hadoop-resource-in-flink-on-kubernetes",level:2},{value:"1. Apache HDFS",id:"1-apache-hdfs",level:3},{value:"1.1 Add the shaded jar",id:"11-add-the-shaded-jar",level:4},{value:"1.2. add <code>core-site.xml</code> and <code>hdfs-site.xml</code>",id:"12-add-core-sitexml-and-hdfs-sitexml",level:5},{value:"2. Apache Hive",id:"2-apache-hive",level:3},{value:"2.1. Add Hive-related jars",id:"21-add-hive-related-jars",level:4},{value:"2.2 Add Apache Hive configuration file (hive-site.xml)",id:"22-add-apache-hive-configuration-file-hive-sitexml",level:4},{value:"Conclusion",id:"conclusion",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"using-apache-hadoop-resource-in-flink-on-kubernetes",children:"Using Apache Hadoop resource in Flink on Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"Using Hadoop resources under StreamPark's Flink Kubernetes runtime, such as checkpoint mount HDFS, read and write Hive, etc. The general process is as follows:"}),"\n",(0,o.jsx)(n.h3,{id:"1-apache-hdfs",children:"1. Apache HDFS"}),"\n",(0,o.jsx)(n.p,{children:"To put flink on k8s-related resources in HDFS, you need to go through the following two steps:"}),"\n",(0,o.jsx)(n.h4,{id:"11-add-the-shaded-jar",children:"1.1 Add the shaded jar"}),"\n",(0,o.jsx)(n.p,{children:"By default, the Flink image pulled from Docker does not include Hadoop-related jars. Here, flink:1.14.5-scala_2.12-java8 is taken as an example, as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"[flink@ff]  /opt/flink-1.14.5/lib\n$ ls\nflink-csv-1.14.5.jar        flink-shaded-zookeeper-3.4.14.jar  log4j-api-2.17.1.jar\nflink-dist_2.12-1.14.5.jar  flink-table_2.12-1.14.5.jar        log4j-core-2.17.1.jar\nflink-json-1.14.5.jar       log4j-1.2-api-2.17.1.jar           log4j-slf4j-impl-2.17.1.jar\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is to download the shaded jar and put it in the lib directory of Flink. Take hadoop2 as an example; download ",(0,o.jsx)(n.code,{children:"flink-shaded-hadoop-2-uber"}),"\uff1a",(0,o.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/apache/flink/flink-shaded-hadoop-2-uber/2.7.5-9.0/flink-shaded-hadoop-2-uber-2.7.5-9.0.jar",children:"https://repo1.maven.org/maven2/org/apache/flink/flink-shaded-hadoop-2-uber/2.7.5-9.0/flink-shaded-hadoop-2-uber-2.7.5-9.0.jar"})]}),"\n",(0,o.jsxs)(n.p,{children:["In addition, you can configure the shaded jar in a dependent manner in the ",(0,o.jsx)(n.code,{children:"Dependency"})," in the StreamPark task configuration. the following configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-shaded-hadoop-2-uber</artifactId>\n    <version>2.7.5-9.0</version>\n    <scope>provided</scope>\n</dependency>\n"})}),"\n",(0,o.jsxs)(n.h5,{id:"12-add-core-sitexml-and-hdfs-sitexml",children:["1.2. add ",(0,o.jsx)(n.code,{children:"core-site.xml"})," and ",(0,o.jsx)(n.code,{children:"hdfs-site.xml"})]}),"\n",(0,o.jsxs)(n.p,{children:["With the shaded jar, you also need the corresponding configuration file to find the Hadoop address. Two configuration files are mainly involved here: ",(0,o.jsx)(n.code,{children:"core-site.xml"})," and ",(0,o.jsx)(n.code,{children:"hdfs-site.xml"}),", through the source code analysis of flink (the classes involved are mainly: ",(0,o.jsx)(n.code,{children:"org.apache.flink.kubernetes.kubeclient.parameters.AbstractKubernetesParameters"}),"), the two files have a fixed loading order, as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// The process of finding hadoop configuration files:\n// 1. Find out whether parameters have been added:${kubernetes.hadoop.conf.config-map.name}\n@Override\npublic Optional<String> getExistingHadoopConfigurationConfigMap() {\n    final String existingHadoopConfigMap =\n            flinkConfig.getString(KubernetesConfigOptions.HADOOP_CONF_CONFIG_MAP);\n    if (StringUtils.isBlank(existingHadoopConfigMap)) {\n        return Optional.empty();\n    } else {\n        return Optional.of(existingHadoopConfigMap.trim());\n    }\n}\n\n@Override\npublic Optional<String> getLocalHadoopConfigurationDirectory() {\n    // 2\u3001If there is no parameter specified in "1", find out whether the local environment where the native command is submitted has environment variables\uff1a${HADOOP_CONF_DIR}\n    final String hadoopConfDirEnv = System.getenv(Constants.ENV_HADOOP_CONF_DIR);\n    if (StringUtils.isNotBlank(hadoopConfDirEnv)) {\n        return Optional.of(hadoopConfDirEnv);\n    }\n    // 3\u3001If there are no "2" environment variables, continue to see if there are environment variables:${HADOOP_HOME}\n    final String hadoopHomeEnv = System.getenv(Constants.ENV_HADOOP_HOME);\n    if (StringUtils.isNotBlank(hadoopHomeEnv)) {\n        // Hadoop 2.x\n        final File hadoop2ConfDir = new File(hadoopHomeEnv, "/etc/hadoop");\n        if (hadoop2ConfDir.exists()) {\n            return Optional.of(hadoop2ConfDir.getAbsolutePath());\n        }\n\n        // Hadoop 1.x\n        final File hadoop1ConfDir = new File(hadoopHomeEnv, "/conf");\n        if (hadoop1ConfDir.exists()) {\n            return Optional.of(hadoop1ConfDir.getAbsolutePath());\n        }\n    }\n\n    return Optional.empty();\n}\n\nfinal List<File> hadoopConfigurationFileItems = getHadoopConfigurationFileItems(localHadoopConfigurationDirectory.get());\n// If "1", "2", and "3" are not found, there is no hadoop environment\nif (hadoopConfigurationFileItems.isEmpty()) {\n    LOG.warn("Found 0 files in directory {}, skip to mount the Hadoop Configuration ConfigMap.", localHadoopConfigurationDirectory.get());\n    return flinkPod;\n}\n// If "2" or "3" exists, it will look for the core-site.xml and hdfs-site.xml files in the path where the above environment variables are located\nprivate List<File> getHadoopConfigurationFileItems(String localHadoopConfigurationDirectory) {\n    final List<String> expectedFileNames = new ArrayList<>();\n    expectedFileNames.add("core-site.xml");\n    expectedFileNames.add("hdfs-site.xml");\n\n    final File directory = new File(localHadoopConfigurationDirectory);\n    if (directory.exists() && directory.isDirectory()) {\n        return Arrays.stream(directory.listFiles())\n                .filter(\n                        file ->\n                                file.isFile()\n                                        && expectedFileNames.stream()\n                                                .anyMatch(name -> file.getName().equals(name)))\n                .collect(Collectors.toList());\n    } else {\n        return Collections.emptyList();\n    }\n}\n// If the above files are found, a Hadoop environment exists. The above two files will be parsed into key-value pairs and then constructed into a ConfigMap. The naming rules are as follows:\npublic static String getHadoopConfConfigMapName(String clusterId) {\n    return Constants.HADOOP_CONF_CONFIG_MAP_PREFIX + clusterId;\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"2-apache-hive",children:"2. Apache Hive"}),"\n",(0,o.jsx)(n.p,{children:"To sink data to Apache Hive or use Hive Metastore for Flink's metadata, it is necessary to open the path from Apache Flink\xae to Apache Hive, which also needs to go through the following two steps:"}),"\n",(0,o.jsx)(n.h4,{id:"21-add-hive-related-jars",children:"2.1. Add Hive-related jars"}),"\n",(0,o.jsx)(n.p,{children:"As mentioned above, the default flink image does not include hive-related jars. The following three hive-related jars need to be placed in the lib directory of Flink. Here, Apache Hive version 2.3.6 is used as an example:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hive-exec"}),"\uff1a",(0,o.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.6/hive-exec-2.3.6.jar",children:"https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.6/hive-exec-2.3.6.jar"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"flink-connector-hive"}),"\uff1a",(0,o.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/apache/flink/flink-connector-hive_2.12/1.14.5/flink-connector-hive_2.12-1.14.5.jar",children:"https://repo1.maven.org/maven2/org/apache/flink/flink-connector-hive_2.12/1.14.5/flink-connector-hive_2.12-1.14.5.jar"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"flink-sql-connector-hive"}),"\uff1a",(0,o.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/apache/flink/flink-sql-connector-hive-2.3.6_2.12/1.14.5/flink-sql-connector-hive-2.3.6_2.12-1.14.5.jar",children:"https://repo1.maven.org/maven2/org/apache/flink/flink-sql-connector-hive-2.3.6_2.12/1.14.5/flink-sql-connector-hive-2.3.6_2.12-1.14.5.jar"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, the above-mentioned hive-related jars can also be dependently configured in the ",(0,o.jsx)(n.code,{children:"Dependency"})," task configuration of StreamPark in a dependent manner, which will not be repeated here."]}),"\n",(0,o.jsx)(n.h4,{id:"22-add-apache-hive-configuration-file-hive-sitexml",children:"2.2 Add Apache Hive configuration file (hive-site.xml)"}),"\n",(0,o.jsx)(n.p,{children:"The difference to HDFS is that there is no default loading method for the hive configuration file in the Flink source code, so developers need to manually add the hive configuration file. There are three main methods here:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Put hive-site.xml in the custom image of Flink, it is generally recommended to put it under the ",(0,o.jsx)(n.code,{children:"/opt/flink/"})," directory in the image"]}),"\n",(0,o.jsx)(n.li,{children:"Put hive-site.xml behind the remote storage system, such as HDFS, and load it when it is used"}),"\n",(0,o.jsx)(n.li,{children:"Mount hive-site.xml in k8s in the form of ConfigMap. It is recommended to use this method as follows:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# 1. Mount the hive-site.xml at the specified location in the specified namespace\nkubectl create cm hive-conf --from-file=hive-site.xml -n flink-test\n# 2. View the hive-site.xml mounted to k8s\nkubectl describe cm hive-conf -n flink-test \n# 3. Mount this cm to the specified directory inside the container\nspec:\n  containers:\n    - name: flink-main-container\n      volumeMounts:\n        - mountPath: /opt/flink/hive\n          name: hive-conf\n  volumes:\n    - name: hive-conf\n      configMap:\n        name: hive-conf\n        items:\n          - key: hive-site.xml\n            path: hive-site.xml\n"})}),"\n",(0,o.jsx)(n.h4,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Through the above method, Apache Flink\xae can be connected with Apache Hadoop and Hive. This method can be extended to general, that is, flink and external systems such as redis, mongo, etc., generally require the following two steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Load the connector jar of the specified external service;"}),"\n",(0,o.jsx)(n.li,{children:"If there is, load the specified configuration file into the Flink system."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},76113:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(30758);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);