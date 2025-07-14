import { View, Text } from 'react-native'
import React from 'react'

import courses from '../../University/json/faculties.json';


const Civil_Engineering = courses.filter((university) =>
 university.faculties.some((faculty) =>
  faculty.courses.some((course) =>
    course.course_name.includes('Civil Engineering')
  )
 )
 );

 const Accounting = courses.filter((university) =>
 university.faculties.some((faculty) =>
  faculty.courses.some((course) =>
    course.course_name.includes('Accounting')
  )
 )
 );

 const Computer_Science = courses.filter((university) =>
 university.faculties.some((faculty) =>
  faculty.courses.some((course) =>
    course.course_name.includes('Computer Science')
  )
 )
 );

 const Medicine = courses.filter((university) =>
 university.faculties.some((faculty) =>
  faculty.courses.some((course) =>
    course.course_name.includes('Medicine')
  )
 )
 );

  export const allcourses = [
 {
  id: '1',
  name: 'Civil Engineering',
  data: Civil_Engineering,
 },
 {
  id: '2',
  name: 'Accounting',
  data: Accounting,
 },
 {
  id: '3',
  name: 'Computer Science',
  data: Computer_Science,
 },
 {
  id: '4',
  name: 'Medicine',
  data: Medicine,
 },
 ];


const Data = () => {

 
 
  return (
    <View>
      <Text>Data</Text>
    </View>
  )
}

export default Data