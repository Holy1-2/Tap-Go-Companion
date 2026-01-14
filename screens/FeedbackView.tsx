import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export const FeedbackView: React.FC = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);

  const toggleIssue = (issue: string) => {
    setIssues(prev => 
      prev.includes(issue) 
        ? prev.filter(i => i !== issue)
        : [...prev, issue]
    );
  };

  const commonIssues = ['Delay', 'Overcrowding', 'Tap&Go Card', 'Driver Conduct', 'Cleanliness'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={40} color="#000" />
          </View>
          <Text style={styles.title}>How was your trip?</Text>
          <Text style={styles.subtitle}>
            Your feedback helps AC Mobility improve transport for everyone.
          </Text>

          {/* Stars */}
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                activeOpacity={0.7}
              >
                <Icon
                  name="star"
                  size={40}
                  color={star <= rating ? '#000' : '#E5E7EB'}
                />
              </TouchableOpacity>
            ))}
          </View>

          {rating > 0 && rating < 4 && (
            <View style={styles.issuesContainer}>
              <Text style={styles.issuesTitle}>What went wrong?</Text>
              <View style={styles.issuesList}>
                {commonIssues.map((issue) => (
                  <TouchableOpacity
                    key={issue}
                    style={[
                      styles.issueButton,
                      issues.includes(issue) && styles.issueButtonSelected,
                    ]}
                    onPress={() => toggleIssue(issue)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.issueText,
                        issues.includes(issue) && styles.issueTextSelected,
                      ]}
                    >
                      {issue}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.submitButton, rating === 0 && styles.submitButtonDisabled]}
          onPress={() => navigation.goBack()}
          disabled={rating === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#F3F4F6',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
  },
  issuesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  issuesTitle: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  issuesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  issueButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  issueButtonSelected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  issueText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  issueTextSelected: {
    color: '#FFF',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.3,
  },
  submitButtonText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFF',
  },
});