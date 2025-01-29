import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import styles from "./Style";
const CloseBtn = require("../../assets/close.png");

const Notification = () => {
  return (
    <View style={styles.notsMainContainer}>
      <View style={styles.notsHeader}>
        <View>
          <Text style={styles.notsHeaderText}>Notifications</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: 30,
          }}
        >
          <View style={styles.notsBody}>
            <View style={styles.notsSubBody}>
              <View style={styles.notsBodyHeader}>
                <Text style={styles.notsBodyHeaderText}>Hello Main Header</Text>
              </View>
              <View style={styles.notsBodyBody}>
                <Text style={styles.notsBodyText}>
                  Esse laborum eiusmod irure culpa elit duis qui ex irure
                  eiusmod fugiat labore ut proident. Esse laborum eiusmod irure
                  culpa elit duis qui ex irure eiusmod fugiat labore ut
                  proident.
                </Text>
              </View>
              <View style={styles.notsBodyTime}>
                <Text>12 Jan, 10:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.notsBody}>
            <View style={styles.notsSubBody}>
              <View style={styles.notsBodyHeader}>
                <Text style={styles.notsBodyHeaderText}>Hello Main Header</Text>
              </View>
              <View style={styles.notsBodyBody}>
                <Text style={styles.notsBodyText}>
                  Esse laborum eiusmod irure culpa elit duis qui ex irure
                  eiusmod fugiat labore ut proident. Esse laborum eiusmod irure
                  culpa elit duis qui ex irure eiusmod fugiat labore ut
                  proident.
                </Text>
              </View>
              <View style={styles.notsBodyTime}>
                <Text>19th Jan, 21:10</Text>
              </View>
            </View>
          </View>

          <View style={styles.notsBody}>
            <View style={styles.notsSubBody}>
              <View style={styles.notsBodyHeader}>
                <Text style={styles.notsBodyHeaderText}>Hello Main Header</Text>
              </View>
              <View style={styles.notsBodyBody}>
                <Text style={styles.notsBodyText}>
                  Esse laborum eiusmod irure culpa elit duis qui ex irure
                  eiusmod fugiat labore ut proident. Esse laborum eiusmod irure
                  culpa elit duis qui ex irure eiusmod fugiat labore ut
                  proident.
                </Text>
              </View>
              <View style={styles.notsBodyTime}>
                <Text>12 Jan, 10:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.notsBody}>
            <View style={styles.notsSubBody}>
              <View style={styles.notsBodyHeader}>
                <Text style={styles.notsBodyHeaderText}>Hello Main Header</Text>
              </View>
              <View style={styles.notsBodyBody}>
                <Text style={styles.notsBodyText}>
                  Esse laborum eiusmod irure culpa elit duis qui ex irure
                  eiusmod fugiat labore ut proident. Esse laborum eiusmod irure
                  culpa elit duis qui ex irure eiusmod fugiat labore ut
                  proident.
                </Text>
              </View>
              <View style={styles.notsBodyTime}>
                <Text>19th Jan, 21:10</Text>
              </View>
            </View>
          </View>

          <View style={styles.notsBody}>
            <View style={styles.notsSubBody}>
              <View style={styles.notsBodyHeader}>
                <Text style={styles.notsBodyHeaderText}>Hello Main Header</Text>
              </View>
              <View style={styles.notsBodyBody}>
                <Text style={styles.notsBodyText}>
                  Esse laborum eiusmod irure culpa elit duis qui ex irure
                  eiusmod fugiat labore ut proident. Esse laborum eiusmod irure
                  culpa elit duis qui ex irure eiusmod fugiat labore ut
                  proident.
                </Text>
              </View>
              <View style={styles.notsBodyTime}>
                <Text>12 Jan, 10:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.notsBody}>
            <View style={styles.notsSubBody}>
              <View style={styles.notsBodyHeader}>
                <Text style={styles.notsBodyHeaderText}>Hello Main Header</Text>
              </View>
              <View style={styles.notsBodyBody}>
                <Text style={styles.notsBodyText}>
                  Esse laborum eiusmod irure culpa elit duis qui ex irure
                  eiusmod fugiat labore ut proident. Esse laborum eiusmod irure
                  culpa elit duis qui ex irure eiusmod fugiat labore ut
                  proident.
                </Text>
              </View>
              <View style={styles.notsBodyTime}>
                <Text>19th Jan, 21:10</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;
