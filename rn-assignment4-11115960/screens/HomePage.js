import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const popularJobs = [
    {
      id: "1",
      title: "Jr Executive",
      company: "Burger King",
      salary: "$96,000/y",
      location: "Los Angeles, US",
      icon: require("../assets/burgerking.png"),
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Beats",
      salary: "$84,000/y",
      location: "Florida, US",
      icon: require("../assets/boomerang.png"),
    },
    {
      id: "3",
      title: "Product Manager",
      company: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
      icon: require("../assets/ion_logo-facebook.png")},
    {
      id: "4",
      title: "Product Manager",
      company: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
      icon: require("../assets/burgerking.png"),
    },
    {
      id: "5",
      title: "Product Manager",
      company: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
      icon: require("../assets/boomerang.png"),
    },
    {
      id: "6",
      title: "Product Manager",
      company: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
      icon: require("../assets/burgerking.png"),
    },
    {
      id: "7",
      title: "Product Manager",
      company: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
      icon: require("../assets/boomerang.png"),
    },
    {
      id: "8",
      title: "Product Manager",
      company: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
      icon: require("../assets/burgerking.png"),
    },
  ];

  const featuredJobs = [
    {
      id: "1",
      title: "Software Engineer",
      company: "Facebook",
      salary: "$180,000",
      location: "Accra, Ghana",
      icon: require("../assets/ion_logo-facebook.png"),
      backgroundColor: "#5487E5",
    },
    {
      id: "2",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#242E6F",
    },
    {
      id: "3",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#5487E5",
    },
    {
      id: "4",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#242E6F",
    },
    {
      id: "5",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#5487E5",
    },
    {
      id: "6",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#242E6F",
    },
    {
      id: "7",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#5487E5",
    },
    {
      id: "8",
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, CA",
      icon: require("../assets/google.png"),
      backgroundColor: "#242E6F",
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView
        style={{ backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <Image
            source={require("../assets/Ellipse.png")}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.container2}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              width: "81%",
              borderRadius: 10,
              backgroundColor: "#f9f9f9",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={require("../assets/search.png")}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                marginLeft: 25,
              }}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a job or position"
            />
          </View>

          <View style={styles.rectangle2}>
            <Image
              style={{ width: "50%", height: "50%" }}
              source={require("../assets/filter.png")}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={featuredJobs}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.featuredJobCard,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <ImageBackground
                source={require("../assets/Group.png")}
                style={{ width: "100%", height: "100%" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginRight: 50,
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      width: 50,
                      height: 50,
                      marginBottom: 10,
                      marginRight: 15,
                      borderRadius: 10,
                      marginLeft: 10,
                      alignItems: "center",
                    }}
                  >
                    <Image source={item.icon} style={styles.jobIcon} />
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.jobTitle}>{item.title}</Text>
                    <Text style={styles.company}>{item.company}</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 80,
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.salary}>{item.salary}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
          contentContainerStyle={styles.featuredJobsList}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        {popularJobs.map((item) => (
          <View style={styles.popularJobCard} key={item.id}>
            <Image source={item.icon} style={styles.jobIconn} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  marginRight: 20,
                }}
              >
                <Text style={styles.jobTitlee}>{item.title}</Text>
                <Text style={styles.companyy}>{item.company}</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  textAlign: "right",
                  marginRight: 15,
                }}
              >
                <Text style={styles.salaryy}>{item.salary}</Text>
                <Text style={styles.locationn}>{item.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    color: "#666",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  container2: {
    flexDirection: "row",
    marginLeft: 20,
    width: "90%",
    height: "4%",
    marginBottom: 40,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  searchInput: {
    height: "100%",
    width: "77%",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    fontSize: "16px",
  },
  rectangle2: {
    backgroundColor: "#f9f9f9",
    width: "14%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "grey",
  },
  featuredJobsList: {
    paddingVertical: 10,
  },
  featuredJobCard: {
 
    borderRadius: 30,
    padding: 20,
    marginLeft: 20,
    marginRight: -10,
    height: 200,
    width: 330,
    marginBottom: 55,
    alignItems: "center",
  },
  jobIcon: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    marginTop: 7,
    marginRight: 3,
    borderRadius: 50,
  },
  jobIconn: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 50,
    marginLeft: 15,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 3,
    color: "white",
  },
  jobTitlee: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 6,
  },
  companyy: {
    fontSize: 14,
    color: "#666",
  },
  company: {
    fontSize: 14,
    color: "#fff",
  },
  salary: {
    fontSize: 14,
    color: "#fff",
    marginRight: 100,
    marginLeft: 10,
  },
  location: {
    fontSize: 12,
    color: "#fff",
  },
  salaryy: {
    fontSize: 14,
    color: "black",
    textAlign: "right",
    marginBottom: 10,
    marginTop: 10,
  },
  locationn: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
  },
  popularJobCard: {
    alignItems: "",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
  },
});

export default HomeScreen;