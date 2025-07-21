import { View, Text, FlatList, Pressable, ScrollView } from "react-native";
import React from "react";
import Scholarshipdata from "./scholarBody.json";

import styles from "./Style";

const ScholarshipBody = () => {
  return (
    <View style={[styles.scholarshipBodyContainer, { overflow: "scroll" }]}>
      <FlatList
        data={Scholarshipdata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.scholarshipBodyHeader}>
              <View style={styles.scholarshipBodyTitleContainer}>
                <Text style={styles.scholarshipBodyTitle}>{item.name}</Text>
                <Text style={styles.scholarshipBodyDate}>
                  Last update 19 Jul 2025
                </Text>
              </View>

              {/* Main Body */}

              <View style={styles.scholarshipSubMainBodyContainer}>
                <View style={styles.scholarshipOperaContainer}>
                  <View style={styles.scholarshipSubOperaContainer}>
                    <Text
                      style={styles.scholarshipUniName}
                    >{`${item.school}`}</Text>
                    <Text
                      style={styles.scholarshipDegreeName}
                    >{`${item.level} deegree`}</Text>
                  </View>
                  <View style={styles.scholarshipSubOperaContainer}>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <Text style={styles.scholarshipDeadline}>Deadline</Text>
                      <Text style={styles.scholarshipDeadlineInfo}>
                        {`${item.deadline}`}
                      </Text>
                    </View>
                    <Text style={styles.scholarshipDeadlineInfo}>
                      {` Country ${item.country}`}
                    </Text>
                    <Text style={styles.scholarshipDeadlineInfo}>
                      {`${item.course_schedule}`}
                    </Text>
                  </View>
                </View>

                {/* All Other Body Info */}

                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Summary:</Text>
                  </View>
                  <View style={styles.scholarshipOtherBodyBodyInfoContainer}>
                    <Text style={styles.mainText}>{`${item.description}`}</Text>
                  </View>
                </View>

                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Host Institution:</Text>
                  </View>
                  <View style={styles.scholarshipOtherBodyBodyInfoContainer}>
                    <Text style={styles.mainText}>{item.school}</Text>
                  </View>
                </View>

                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Fields Applicable</Text>
                  </View>

                  {item.field.inclusive.map((field, index) => (
                    <View
                      key={index}
                      style={styles.scholarshipOtherBodyBodyInfoContainer}
                    >
                      <Text style={styles.mainText}> • {field}</Text>
                    </View>
                  ))}

                  {item.field.exclusive.map((field, index) => (
                    <View
                      key={index}
                      style={styles.scholarshipOtherBodyBodyInfoContainer}
                    >
                      <Text style={styles.mainText}> • {field}</Text>
                    </View>
                  ))}
                </View>
                {/* Awards */}
                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Number of Awards:</Text>
                  </View>
                  <View style={styles.scholarshipOtherBodyBodyInfoContainer}>
                    <Text style={styles.mainText}>{item.no_awards}</Text>
                  </View>
                </View>
                {/* Targeted  Group*/}
                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Target Group:</Text>
                  </View>
                  <View style={styles.scholarshipOtherBodyBodyInfoContainer}>
                    <Text style={styles.mainText}>{item.targeted_group}</Text>
                  </View>
                </View>
                {/* Scholarship Value / Duration */}
                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>
                      Scholarship Value / Duration:
                    </Text>
                  </View>

                  {/* Render the note */}
                  <View style={styles.scholarshipOtherBodyBodyInfoContainer}>
                    <Text style={styles.mainText}>
                      {item["value_&_duration"].note}
                    </Text>
                  </View>

                  {/* Render the amounts */}
                  <View>
                    {item["value_&_duration"].amount.map((amount, index) => (
                      <View
                        key={index}
                        style={styles.scholarshipOtherBodyBodyInfoContainer}
                      >
                        <Text style={styles.mainText}>• {amount}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                {/* Eligibility */}
                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Eligibility:</Text>
                  </View>
                  {item.eligibility.map((eligibility, index) => (
                    <View
                      key={index}
                      style={styles.scholarshipOtherBodyBodyInfoContainer}
                    >
                      <Text style={styles.mainText}>• {eligibility}</Text>
                    </View>
                  ))}
                </View>
                {/* Application Instructions */}
                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Application Instructions:</Text>
                  </View>
                  {item.instructions.map((instruction, index) => (
                    <View
                      key={index}
                      style={styles.scholarshipOtherBodyBodyInfoContainer}
                    >
                      <Text style={styles.mainText}>• {instruction}</Text>
                    </View>
                  ))}
                </View>
                {/* Website */}
                <View style={styles.scholarshipOtherBodyInfoMainContainer}>
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>
                      Official Scholarship Website
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.scholarshipOtherBodyBodyInfoContainer,
                      { display: "flex", flexDirection: "row", gap: 5 },
                    ]}
                  >
                    <Pressable>
                      <Text style={styles.titles}>Click here</Text>
                    </Pressable>
                    <Text style={styles.mainText}>
                      to visit the official scholarship page
                    </Text>
                  </View>
                </View>
                {/* Disclaimer */}
                <View
                  style={[
                    styles.scholarshipOtherBodyInfoMainContainer,
                    {
                      maxWidth: 600,
                      paddingTop: 30,
                      backgroundColor: "rgba(240, 240, 240, 0.8)",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.scholarshipOtherBodyHeaderInfoContainer}>
                    <Text style={styles.titles}>Disclaimer:</Text>
                  </View>
                  <View style={styles.scholarshipOtherBodyBodyInfoContainer}>
                    <Text style={styles.mainText}>{item.disclaimer}</Text>
                    <Text></Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ScholarshipBody;
