import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import { isLoading } from "expo-font";
import useFetch from "../../../hook/useFetch";

const NearByjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
         data?.map((job)=>(
          <NearbyJobCard
          job={job}
          key={`nearby-job-${job?.job_id}`}
          handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
          
          
          />
         ))
        )}
      </View>
    </View>
  );
};

export default NearByjobs;
